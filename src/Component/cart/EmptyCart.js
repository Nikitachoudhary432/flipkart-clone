import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)`
  width: 80%;
  height: 65vh;
  background: #fff;
  margin: 30px 140px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Image = styled("img")({
  width: "15%",
});

const EmptyCart = () => {
  return (
    <Component>
      <Container>
        <Typography style={{ color: "red", fontSize: "30px" }}>
          Your cart is empty!
        </Typography>
        <Typography component="span">Add items to it now.</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
