import React, { useState } from "react";
import {
  Button,
  Typography,
  styled,
  Box,
  Menu,
  MenuItem,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginPage from "../login/LoginPage";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 0% 0 auto",
  alignItems: "center",
  " & > *": {
    marginRight: "40px !important",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
`;

const CustomButton = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menu, setMenu] = useState(null);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setMenu(null);
  };

  const openFile = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      <div onMouseEnter={handleClick}>
        <LoginButton variant="contained">Login</LoginButton>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        onMouseLeave={handleClose}
      >
        <div className="flex border-b-2">
          <MenuItem>New Customer</MenuItem>
          <MenuItem className="text-blue-500" style={{ color: "#2874f0" }}>
            Signup
          </MenuItem>
        </div>
        <MenuItem onClick={() => openFile()}>myProfile</MenuItem>
        <MenuItem onClick={handleClose}>Flipkart Plus zone</MenuItem>
        <MenuItem onClick={handleClose}>order</MenuItem>
        <MenuItem onClick={handleClose}>wishlist</MenuItem>
        <MenuItem onClick={handleClose}>reward</MenuItem>
        <MenuItem onClick={handleClose}>Gift card</MenuItem>
      </Menu>
      <Link to="/seller">
        <Typography className="font-bold">Become a Seller</Typography>
      </Link>
      <Typography
        aria-controls="simple-menu"
        aria-haspopup="true"
        onMouseEnter={handleMenu}
      >
        More
      </Typography>
      <Menu
        anchorEl={menu}
        open={Boolean(menu)}
        onClose={handleClose}
        onMouseLeave={handleClose}
        className="m-0 p-0"
      >
        <Link to="/notification">
          <MenuItem onClick={handleClose}>Notification Preferences</MenuItem>
        </Link>
        <Link to="/customer">
          <MenuItem onClick={handleClose}>24 X 7 Customer Care</MenuItem>
        </Link>
        <Link to="/advertise">
          <MenuItem onClick={handleClose}>Advertise</MenuItem>
        </Link>
        <Link to="/download">
          <MenuItem onClick={handleClose}>Download App</MenuItem>
        </Link>
      </Menu>

      <Container to="/cart">
        <Badge badgeContent={cartDetails?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <LoginPage open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
