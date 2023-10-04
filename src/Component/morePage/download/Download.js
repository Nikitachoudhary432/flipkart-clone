import React from "react";
import { DialogContent, Box, styled } from "@mui/material";

const Component = styled(DialogContent)`
  padding: 0;
  padding-top: 0;
`;

const Background = styled(Box)`
  background-image: url("background.png"); // Corrected the URL
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 15px 80px;
  align-items: center;
  justify-content: center;
  height: 710px;
  margin-bottom: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  display: flex;
  /* justify-content: flex-start; */
  align-items: flex-start;
`;

const Image = styled("img")`
  width: 180px;
  display: block;
  margin: 10px auto;
`;

const data = [
  {
    image: "/one.png", // Corrected file extension
    text: "Genuine Products",
  },
  {
    image: "/two.png", // Corrected file extension
    text: "Secure Shopping",
  },
  {
    image: "/three.png", // Corrected file extension
    text: "Hassle-free Returns", // Removed the extra space
  },
];

const Download = () => {
  return (
    <Component>
      <Background container>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "60%",
            height: "80%",
          }}
        >
          <Image src="/down1.png" />
          <h1 className="text-5xl text-center">
            INDIA'S MOST POPULAR! SHOPPING APP
          </h1>
          <div className="flex justify-evenly items-center w-full mt-10">
            {data.map((item) => (
              <div key={item.text}>
                {" "}
                <img src={item.image} alt={item.text} />
                <h1>{item.text}</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-full mt-10">
            <img src="/App-Store.png" className="h-[70px] mr-2" />
            <img src="/Play-Store.png" className="h-[70px] ml-2" />
          </div>
        </Box>
      </Background>
    </Component>
  );
};

export default Download;
