import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
  styled,
  Link,
  Grid,
} from "@mui/material";

const Component = styled(DialogContent)`
  padding: 0;
  padding-top: 0;
`;

const Image = styled(Grid)`
  background-color: #2874f0;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid rgb(235, 235, 236);
  background-color: rgb(250, 250, 251);
  flex-basis: 55%;
  @media (max-width: 600px) {
    grid-column: span 2;
  }
`;

const Wrapper = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background: #ffffff;
  flex-basis: 45%;
  @media (max-width: 600px) {
    grid-column: span 2;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #2874f0;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  margin: 10px;
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

// const Wrapper = styled(Box)`
//   padding: 25px 35px;
//   display: flex;
//   flex: 1;
//   overflow: auto;
//   flex-direction: column;
//   & > div,
//   & > button,
//   & > p {
//     margin-top: 20px;
//   }
// `;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
// height: 70vh;

// const Image = styled(Box)`
//   background-color: #2874f0;
//   width: 40%;
//   height: 100%;
//   padding: 45px 35px;
//   & > p,
//   & > h5 {
//     color: #ffffff;
//     font-weight: 600;
//   }
// `;

const loginInitialValues = {
  username: "",
  password: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const Advertise = () => {
  const [login, setLogin] = useState(loginInitialValues);
  const [error, showError] = useState(false);
  const [account, toggleAccount] = useState(accountInitialValues.login);

  useEffect(() => {
    showError(false);
  }, [login]);

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  return (
    <Component>
      <Grid container>
        {/* <Box style={{ display: "flex", height: "100%" }}> */}
        <Image item xs={12} md={6}>
          <img src="/advertise.svg" alt="Advertise Image" />
        </Image>
        <Wrapper item xs={12} md={6}>
          <div className="flex justify-center flex-col p-8 m-3">
            <div className=" h-[53px] w-[105px]">
              <img src="/flipLogo.svg" />
            </div>
            <h1 className="text-3xl font-semibold mb-3">
              Login to your account
            </h1>
            <p className="text-base text-[#363d41] mb-3">
              Please enter in your credentials to login
            </p>
            <TextField
              variant="outlined"
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Email"
              sx={{ margin: 1 }}
            />
            {error && <Error>Please enter valid Email ID/Mobile number</Error>}
            <TextField
              variant="outlined"
              onChange={(e) => onValueChange(e)}
              name="password"
              label="Enter Password"
              sx={{ margin: 1 }}
            />
            <Link className="flex justify-end m-3 p-3">Forgot Password</Link>
            <LoginButton>Login</LoginButton>
            <CreateAccount onClick={() => toggleSignup()}>
              Do not have an Account? Register Now
            </CreateAccount>
          </div>
        </Wrapper>
        {/* </Box> */}
      </Grid>
    </Component>
  );
};

export default Advertise;
