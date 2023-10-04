import React from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import HttpsIcon from "@mui/icons-material/Https";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  box-shadow: none;
  justify-content: space-between;
  background: none;
`;
const Warning = styled(Typography)`
  color: #ff6161;
  font-size: 12px;
  margin: 12px 0 24px;
  padding: 0 50px;
  font-weight: 500;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
`;

const Desktop = () => {
  return (
    <div>
      <h1 className="text-lg font-medium ml-9 my-2">Desktop Notification</h1>
      <Component>
        <Box className="w-full">
          <LeftComponent>
            <div className="flex">
              <Checkbox color="primary" defaultChecked />
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
              <Checkbox color="primary" defaultChecked />
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
              <Checkbox color="primary" defaultChecked />
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
              <Checkbox color="primary" defaultChecked />
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
              <Checkbox color="primary" defaultChecked />
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/bell.png" alt="Bell Icon" className="w-[88px] h-[88px]" />
          <Warning>
            Oops! You are missing out on a lot of important notifications.
            Please switch it on from Browser Settings.
          </Warning>
          <Box className="flex flex-col items-center">
            <Typography className="text-[#878787] font-medium">
              How to Unblock
            </Typography>
            <div className="flex justify-center items-center font-medium text-xs">
              <Warning
                className="text-xs"
                style={{ color: "black", margin: "0px" }}
              >
                <HttpsIcon className="w-4 text-green-600"  style={{ width: '1rem' }} />
                <ArrowForwardIosIcon className="w-1 text-gray-500"  style={{ width: '0.75rem' }}/> Notifications{" "}
                <ArrowForwardIosIcon  className="w-1 text-gray-500" style={{ width: '0.75rem' }} /> Allow
              </Warning>
            </div>
          </Box>
        </Box>
      </Component>
    </div>
  );
};

export default Desktop;
