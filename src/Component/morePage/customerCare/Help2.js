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

const Help2 = () => {
  return (
    <div>
      <h1 className="text-lg font-medium ml-2 mt-4">
        Frequently asked questions
      </h1>
      <Component
        sx={{
          width: "100%", // Set the width to 100% to take up the full width
          boxSizing: "border-box", // Ensure the width includes padding and borders
        }}
      >
        <Box style={{ width: "100%" }}>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px", color: "#212121" }}>
                I want to change the address for delivery of my order. Is it
                possible now?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px" }}>
                How can I modify/add an alternate number for the order delivery?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px" }}>
                Can I get my orders delivered at a specific time?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px" }}>
                Where can I get the delivery executive's contact details?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px" }}>
                Can I get my order delivered faster?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex flex-col border-b border-gray-200 py-2 w-full">
              <h3 style={{ fontSize: "14px" }}>
                Can I reinstate a cancelled order?
              </h3>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
        </Box>
      </Component>
    </div>
  );
};

export default Help2;
