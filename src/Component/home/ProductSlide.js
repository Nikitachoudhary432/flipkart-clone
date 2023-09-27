import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from "react-countdown";
import TimerSharpIcon from "@mui/icons-material/TimerSharp";
import { Link } from "react-router-dom";
import { getProducts } from "../Action";
import { useDispatch, useSelector } from "react-redux";

import { Box, Divider, Typography, styled } from "@mui/material";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background: #ffffff;
`;
const Deal = styled(Box)`
  padding: 15px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
`;
const Image = styled("img")({
  width: "auto",
  height: 150,
});

const Text = styled(Typography)`
  font-weight: 700;
  font-size: 15px;
`;

const ProductSlide = ({ title, timer }) => {
  const dispatch = useDispatch();
  const product = useSelector((e) => e.products);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const getProduct = async () => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products");
  //     if (response.ok) {
  //       const data = await response.json();
  //       setProduct(data);
  //     } else {
  //       setError(`HTTP error: ${response.status}`);
  //     }
  //   } catch (error) {
  //     setError(
  //       `There was a problem with the fetch operation: ${error.message}`
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getProduct();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Component>
      <Deal>
        <Typography style={{ fontWeight: "bold", fontSize: "30px" }}>
          {title}
        </Typography>
        {timer && (
          <Timer>
            <TimerSharpIcon style={{ marginRight: "10px" }} />
            <Countdown date={Date.now() + 5.04e7} />
          </Timer>
        )}
      </Deal>
      <Divider></Divider>
      {product.products && product.products.length > 0 && (
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          centerMode={true}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {product.products.map((item) => (
            <Link to={`product/${item.id}`} key={item.id}>
              <Box className="product-item" style={{ padding: "20px" }}>
                <Image src={item.images[0]} alt={item.title} />
                <Text>{item.title}</Text>
                <Text style={{ color: "#29a535" }}>
                  Upto {item.discountPercentage}% Off
                </Text>
              </Box>
            </Link>
          ))}
        </Carousel>
      )}
    </Component>
  );
};

export default ProductSlide;
