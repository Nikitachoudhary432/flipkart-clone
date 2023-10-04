import React, { useState } from "react";
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

const Refund = () => {
  const initialItemsToShow = 5; // Number of items to initially show
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const leftComponents = [
    // Add your LeftComponent items here
    {
      text: "Can I reactivate my inactive Flipkart account?",
    },
    {
      text: "Do I need to verify my mobile number or email address every time I log in?",
    },
    {
      text: "What is an OTP or verification code?",
    },
    {
      text: "Why do I need to verify my mobile number or email address to log into my Flipkart account?",
    },
    {
      text: "I'm getting an error message that says, 'You've exceeded the maximum number of attempts to enter correct verification code'. How can I log in to my Flipkart account now?",
    },
    {
      text: "I always login using my phone number, but I recently lost my phone. I have also forgotten the password to my Flipkart account. How do I access it?",
    },
    {
      text: "Can I use a corporate email ID to sign up?",
    },
    {
      text: "How can I add a new delivery address to my Flipkart account?",
    },
    {
      text: "How will my order be delivered?",
    },
    {
      text: "How can I deactivate my Flipkart account?",
    },
  ];

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setItemsToShow(showAll ? initialItemsToShow : leftComponents.length);
  };

  return (
    <div>
      <h1 className="text-lg font-medium ml-2 mt-4">Refunds related</h1>
      <Component
        sx={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box style={{ width: "100%" }}>
          {leftComponents.slice(0, itemsToShow).map((item, index) => (
            <LeftComponent key={index}>
              <div className="flex flex-col border-b border-gray-200 py-2 w-full">
                <h3 style={{ fontSize: "14px", color: "#212121" }}>
                  {item.text}
                </h3>
              </div>
              <KeyboardArrowDownIcon />
            </LeftComponent>
          ))}
        </Box>
      </Component>
      {!showAll && (
         <button
         variant="outlined"
         color="primary"
         onClick={toggleShowAll}
         style={{
           marginTop: "5px",
           display: "flex",
           justifyContent: "center",
           width: "100%",
           color: "blue",
         }}
       >
         View More
       </button>
      )}
    </div>
  );
};

export default Refund;
