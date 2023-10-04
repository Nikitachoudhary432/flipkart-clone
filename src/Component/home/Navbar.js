import { Typography, Box, styled, Menu, MenuItem } from "@mui/material";
import { navData } from "../../constant/data";
import { useState } from "react";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflowX: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const handleClose = () => {
    setMenu(null);
  };

  return (
    <Component>
      {navData.map((temp, index) => (
        <Container key={index}>
          <img src={temp.url} style={{ width: 64, height: 64 }} />
          <Text
            onMouseEnter={(e) => {
              if (index === 2) {
                setMenu(e.currentTarget);
              } else {
                handleClose();
              }
            }}
          >
            {temp.text}
          </Text>
          {index === 2 && (
            <Menu
              anchorEl={menu}
              open={Boolean(menu)}
              onMouseLeave={handleClose}
            >
              <MenuItem onClick={handleClose}>Mens Top wear</MenuItem>
              <MenuItem onClick={handleClose}>Mens Bottom wear</MenuItem>
              <MenuItem onClick={handleClose}>Women Top</MenuItem>
              <MenuItem onClick={handleClose}>Jeans</MenuItem>
              <MenuItem onClick={handleClose}>Kurtis</MenuItem>
            </Menu>
          )}
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
