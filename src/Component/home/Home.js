import React from "react";
import { Fragment } from "react";
import NavBar from "./Navbar";
import Advertise from "./Advertise";
import ProductSlide from "./ProductSlide";
import { Box, styled } from "@mui/material";
import Information from "./Information";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;
const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <Component>
        <Advertise />
        <ProductSlide title="Deal of the day" timer={true} />
        <ProductSlide title="Beauty, Toy, Gifts and more..." timer={false} />
        <ProductSlide title="Home and Kitchen mela" timer={false} />
        <ProductSlide title="Fashion Top Deals" timer={false} />
        <Information />
      </Component>
    </Fragment>
  );
};

export default Home;
