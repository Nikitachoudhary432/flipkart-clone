import React from "react";
import { Typography, Button } from "@mui/material";

const Feedback = ({ text, ans }) => {
  const handleFeedback = (value) => {
    console.log(`Feedback: ${value}`);
  };

  return (
    <div>
      <Typography className="text-lg">{text}</Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        className="text-sm"
        style={{ padding: "3px 0 10px" }}
      >
        {ans}
      </Typography>
      <Typography
        variant="h6"
        sx={{ mt: "20px ", mb: "8px", fontSize: "14px" }}
        className="text-[#878787] text-sm"
      >
        Was this helpful?
      </Typography>
      <Button
        variant="outlined"
        onClick={() => handleFeedback("Yes")}
        sx={{ borderColor: "gray", color: "black" }}
      >
        Yes
      </Button>
      <Button
        variant="outlined"
        onClick={() => handleFeedback("No")}
        sx={{ ml: 1, borderColor: "gray", color: "black" }}
      >
        No
      </Button>
    </div>
  );
};

export default Feedback;
