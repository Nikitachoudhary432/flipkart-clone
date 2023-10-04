import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { Card, Box, Typography, Button, Grid, styled } from "@mui/material";
import { removeFromCart } from "../Action";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Component = styled(Grid)(({ theme }) => ({
  padding: "20px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Components = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin: 20px 140px;
`;

// const LeftComponent = styled(Box)`
//   margin: 20px;
//   display: flex;
//   flex-direction: column;
// `;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div style={{ background: "#e1e1e1" }}>
      <Header>
        <Typography style={{ fontWeight: 600, fontSize: 18 }}>
          My Cart
        </Typography>
      </Header>
      <Components container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
          From Saved Address
        </LeftComponent>
        <Grid
          item
          lg={3}
          md={3}
          sm={12}
          xs={12}
          style={{
            border: "1px solid #d1d1de",
            padding: "7px",
            color: "#2a06f2",
          }}
        >
          Enter Dilivery Pincode
        </Grid>
      </Components>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
            <BottomWrapper>
              <StyledButton>Place Order</StyledButton>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
          <Box className="border-t border-gray-400 mt-5 flex w-full justify-between pt-2">
            <div className="flex">
              <p>Policies: </p>
              <p className="border-r-2 border-gray-400 px-2">Returns Policy</p>
              <p className="border-r-2 border-gray-400 px-2">Terms of use</p>
              <p className="border-r-2 border-gray-400 px-2">Security</p>
              <p className="border-r-2 border-gray-400 px-2">Privacy</p>
              <p className="pl-2">
                Infringement© 2007-2023 Flipkart.com
              </p>
            </div>
            <div>Need help? Visit the Help Center or Contact Us</div>
          </Box>
        </Component>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
