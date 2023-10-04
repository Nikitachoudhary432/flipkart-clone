import React, { useState } from "react";
import { Card, Box, Typography, Button, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Checkbox from "@mui/material/Checkbox";
import Feedback from "./Feedback";

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

const Delivery = () => {
  const initialItemsToShow = 5; // Number of items to initially show
  const [showAll, setShowAll] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const leftComponents = [
    // Add your LeftComponent items here
    {
      text: "What should I do if my order is approved but hasn't been shipped yet?",
      ans: "Sellers usually ship orders 1-2 business days before the delivery date so that they reach you on time. In case your order hasn't been shipped within this time please contact our Customer Support so that we can look into it.",
    },
    {
      text: "Can I take the shipment after opening and checking the contents inside?",
      ans: "As per company policy, a shipment can't be opened before delivery, but you can accept the shipment and get in touch with us later in case you have any concerns.",
    },
    {
      text: "How quickly can I get my order delivered?",
      ans: "Orders will be delivered by the date you see on the product page for your location.",
    },
    {
      text: "My order has reached the nearest delivery hub, but why isn't it out for delivery yet?",
      ans: "The courier service delivering your order are responsible for making sure that your order reaches you within the delivery date. Rest assured, you'll get an SMS once your shipment is out for delivery.",
    },
    {
      text: "Can I get my order delivered faster?",
    },
    {
      text: "Why can't I track my order even though it has been shipped?",
      ans: "Courier services usually take upto 24 hours to activate tracking for an order once it's shipped. Please check again after the mentioned time frame.",
    },
    {
      text: "I have a complaint about the courier executive who came to deliver my order.",
      ans: "You can contact our Customer Support team with the details and we will get in touch with the courier service provider to resolve your complaint.",
    },
    {
      text: "What do the different order statuses in 'My Orders' mean?",
    },
    {
      text: "How will my order be delivered?",
    },
    {
      text: "Why does the estimated delivery time vary for each seller?",
    },
    {
      text: "How do I contact seller's partnered courier service providers?",
    },
    {
      text: "How will my order be delivered?",
    },
    {
      text: "How will my order be delivered?",
    },
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const toggleShowAll = () => {
    setShowAll(!showAll);
    setItemsToShow(showAll ? initialItemsToShow : leftComponents.length);
  };

  const handleQuestionClick = (index) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };

  return (
    <div>
      <h1 className="text-lg font-medium ml-2 mt-4">Delivery related</h1>
      <Component
        sx={{
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Box style={{ width: "100%" }}>
          {leftComponents.slice(0, itemsToShow).map((item, index) => (
            <div key={index}>
              <LeftComponent>
                <div
                  className="flex flex-col border-b border-gray-200 py-2 w-full"
                  onClick={() => handleQuestionClick(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h3 style={{ fontSize: "14px", color: "#212121" }}>
                    {item.text}
                  </h3>
                </div>
                <KeyboardArrowDownIcon />
              </LeftComponent>
              {clickedIndex === index && (
                <Feedback text={item.text} ans={item.ans} />
              )}
            </div>
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
// <div>
//   <h1 className="text-lg font-medium ml-2 mt-4">Delivery related</h1>
//   <Component
//     sx={{
//       width: "100%",
//       boxSizing: "border-box",
//     }}
//   >
//     <Box style={{ width: "100%" }}>
//       {leftComponents.slice(0, itemsToShow).map((item, index) => (
//         <LeftComponent key={index}>
//           <div
//             className="flex flex-col border-b border-gray-200 py-2 w-full"
//             onClick={handleQuestionClick}
//             style={{ cursor: "pointer" }}
//           >
//             <h3 style={{ fontSize: "14px", color: "#212121" }}>
//               {item.text}
//             </h3>
//             {showAnswer && (
//               <Typography variant="body2" color="textSecondary">
//                 {item.ans}
//               </Typography>
//             )}
//             {showAnswer && (
//               <div>
//                 <Typography variant="body2" color="textSecondary">
//                   Was this helpful?
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   onClick={() => handleFeedbackClick("yes")}
//                   style={{
//                     color: "green",
//                     background: "none",
//                     marginRight: "10px",
//                   }}
//                 >
//                   Yes
//                 </Button>
//                 <Button
//                   variant="contained"
//                   onClick={() => handleFeedbackClick("no")}
//                   style={{ color: "Red", background: "none" }}
//                 >
//                   No
//                 </Button>
//               </div>
//             )}
//           </div>
//           <KeyboardArrowDownIcon />
//         </LeftComponent>
//       ))}
//     </Box>
//   </Component>
//   {!showAll && (
//     <Button
//       variant="outlined"
//       color="primary"
//       onClick={toggleShowAll}
//       sx={{ marginTop: "10px" }}
//     >
//       View More
//     </Button>
//   )}
// </div>

export default Delivery;
