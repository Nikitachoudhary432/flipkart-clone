import React from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

const App = () => {
  return (
    <div>
      <h1 className="text-lg font-medium ml-9 mt-4">In-App Notifications</h1>
      <p className="text-sm text-[#878787] ml-9 mb-2">Receive alerts ONLY on your Flipkart App</p>
      <Component>
        <Box>
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked/>
              <div>
                <h3 style={{ fontSize: "14px" }}>My Orders</h3>
                <p style={{ fontSize: "12px", color: "#878787" }}>
                  {" "}
                  Latest update on your orders
                </p>
              </div>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked/>
              <div>
                <h3 style={{ fontSize: "14px" }}>Reminders</h3>
                <p style={{ fontSize: "12px", color: "#878787" }}>
                  {" "}
                  Price drop, back-in-stock, etc...
                </p>
              </div>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked/>
              <div>
                <h3 style={{ fontSize: "14px" }}>
                  Recommendations by Flipkart
                </h3>
                <p style={{ fontSize: "12px", color: "#878787" }}>
                  {" "}
                  Product, offer , content based on you product
                </p>
              </div>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked/>
              <div>
                <h3 style={{ fontSize: "14px" }}>New Offers</h3>
                <p style={{ fontSize: "12px", color: "#878787" }}>
                  {" "}
                  Top Deals and product
                </p>
              </div>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked/>
              <div>
                <h3 style={{ fontSize: "14px" }}>My Flipkart Community</h3>
                <p style={{ fontSize: "12px", color: "#878787" }}>
                  Profile update, Newsletters etc
                </p>
              </div>
            </div>
            <KeyboardArrowDownIcon />
          </LeftComponent>
        </Box>
        <Box
          style={{
            margin: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/app.png" alt="Bell Icon" />
        </Box>
      </Component>
    </div>
  );
};

export default App;
