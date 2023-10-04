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

const pages = ["Sell Online", "Fees and Commission", "Grow", "Learn", 'Shopsy'];

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

const CustomButton = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Wrapper>
      <Box sx={{ flexGrow: 1, display: { lg: "flex", sm: "none" } }}>
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
      </Box>
    </Wrapper>
  );
};

export default CustomButton;
