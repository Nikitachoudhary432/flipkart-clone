import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const Head = styled(Typography)`
  position: relative;
  padding: 5px 40px 0px;
  background: rgb(255, 255, 255);
  color: #8b8888;
  font-weight: 300;
  font-size: 15px;
  margin: 10px;
`;
const StyledHeader = styled(AppBar)`
  padding: 0px 30px;
  position: fixed;
  top: 45px;
  left: auto;
  right: 0;
  box-shadow: rgb(193, 199, 208) 0px 0px 0px;
  align-items: center;
  height: 60px;
  background-color: rgb(255, 255, 255);
  font-size: 14px;
  font-family: Inter;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  color: rgb(53, 53, 53) !important;
  border-top: 1px solid rgb(238, 238, 238);
`;

const Component = styled(Box)``;

const SubHeading = styled(Typography)`
  font-size: 12px;
  line-height: 12%;
`;

const CustomButtonWrapper = styled(Box)`
  display: flex;
  flex-grow: 1;
  gap: 10px;
  margin-left: 10px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const CustomButtonWrappers = styled(Box)`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-grow: 1;
  gap: 30px;
  margin-left: 10px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;
const Button = styled('button')`
  padding: 0px;
  border: none;
  min-width: unset;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 160px;
  height: 60px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background: rgb(255, 205, 0);
  color: rgb(0, 0, 0);
  border-radius: 0px;
  cursor: pointer;
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = (
    <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
        <ListItem button>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <Head>
        Existing Seller? Explore our product recommendations with Dhamaka
        Selection
      </Head>
      <StyledHeader>
        <Toolbar style={{ minHeight: 55, width: "100%", padding: 0 }}>
          <MenuButton aria-label="" color="inherit" onClick={handleOpen}>
            <MenuIcon />
          </MenuButton>

          <Drawer open={open} onClose={handleClose}>
            {list}
          </Drawer>
          <Component>
            <img
              src="/logo_seller.svg"
              alt="Flipkart Logo"
              width="107px"
              height="32px"
            />
          </Component>
          <CustomButtonWrapper>
            <CustomButton />
          </CustomButtonWrapper>
          <CustomButtonWrappers>
            <button className="text-base font-normal gap-7">Login</button>
            <Button>Start Selling</Button>
          </CustomButtonWrappers>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
