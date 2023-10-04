import React from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";

const Component = styled(Card)`
  box-shadow: none;
  display: flex;
  justify-content: space-between;
  background: none;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

const Help = () => {
  return (
    <div>
      <h1 className="text-lg font-medium ml-2 mt-4">
        What issue are you facing?
      </h1>
      <Component
        sx={{
          width: "100%", // Set the width to 100% to take up the full width
          boxSizing: "border-box", // Ensure the width includes padding and borders
        }}
      >
        <Box style={{width: "100%"}}>
          <LeftComponent>
            <div className="flex flex-col">
              <h3 style={{ fontSize: "14px", color: "#212121" }}>
                I want to manage my order
              </h3>
              <p style={{ fontSize: "12px", color: "#878787" }}>
                {" "}
                view , cancel or Return an order
              </p>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col">
              <h3 style={{ fontSize: "14px" }}>
                {" "}
                I want help with Return & Refunds
              </h3>
              <p style={{ fontSize: "12px", color: "#878787" }}>
                {" "}
                Manage and track returns
              </p>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col">
              <h3 style={{ fontSize: "14px" }}>I want help with other issue</h3>
              <p style={{ fontSize: "12px", color: "#878787" }}>
                {" "}
                Product, offer , payment and others..
              </p>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col">
              <h3 style={{ fontSize: "14px" }}>I want to contact to seller</h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
        </Box>

      </Component>
    </div>
     
  );
};

export default Help;
