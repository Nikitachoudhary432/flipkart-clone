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
import Search from "./Search";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
`;

const SubHeading = styled(Typography)`
  font-size: 12px;
  line-height: 12%;
`;

const CustomButtonWrapper = styled(Box)`
  margin: 0.7% 40px auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const HeaderSeller = () => {
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
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton aria-label="" color="inherit" onClick={handleOpen}>
          <MenuIcon />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list}
        </Drawer>
        <Component>
          <img src="/flipkart.png" alt="Flipkart Logo" width="88px" />
          <Box style={{ display: "flex", justifyContent: "center" , alignItems: "center"}}>
            <SubHeading>Explore Plus</SubHeading>
            <img src="/plus.svg" className="ml-2" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButton />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default HeaderSeller;
