import { useState } from "react";

import { Button, Box, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Action";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginBottom: "20px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;

const ActionItem = ({ product }) => {
  console.log(product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addProduct(product));
    navigate("/cart");
  };

  return (
    <LeftContainer>
      <Image src={product.thumbnail} />
      <br />
      <StyledButton
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <ShoppingCartIcon />
        Add to Cart
      </StyledButton>
      <StyledButton
        // onClick={() => buyNow()}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
