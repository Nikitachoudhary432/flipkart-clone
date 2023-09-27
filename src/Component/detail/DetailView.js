import React, { useEffect } from "react";
import { singleProduct } from "../Action";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Box, styled, Grid } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDeatils";

const Component = styled(Box)`
  margin-top: 55px;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  & > p {
    margin: 10px;
  }
`;

const DetailView = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((e) => e.product_data);

  useEffect(() => {
    dispatch(singleProduct(id));
  }, []);
  return (
    <Component>
      <Box></Box>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title}</Typography>
            <Typography>{product.description}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              {product.rating} Ratings & 1 Reviews
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product.price}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product.discountPercentage}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
