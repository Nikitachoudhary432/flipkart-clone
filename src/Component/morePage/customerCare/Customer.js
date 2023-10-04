import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Card, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { notification } from "../../../constant/data";
import Help from "./Help";
import Help2 from "./Help2";
import Delivery from "./Delivery";
import Login from "./Login";
import Refund from "./Refund";
import PayLater from "./PayLater";
import Payment from "./Payment";

const drawerWidth = 340;

// const Component = styled(Card)`
//   border-top: 1px solid #f0f0f0;
//   border-radius: 0px;
//   display: "flex",
//   justifyContent: "space-between",
//   margin: "55px 130px 0 130px !important",
//   overflowX: "overlay",
//   [theme.breakpoints.down("lg")]: {
//     margin: "0px !important",
//   },
// `;

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflowX: "overlay",
  bordertop: "1px solid #f0f0f0",
  background: " #ffffff",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
    background: "#FFFFFF",
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

function Customer() {
  const [selectedNotification, setSelectedNotification] =
    React.useState("Help1");
  const IssueTypes = [
    { text: "Help with your issue", key: "Help1" },
    { text: "Help with your order", key: "Help2" },
    { text: "Help with other issue", key: "Help3" },
  ];
  const HelpTypes = [
    { text: "Delivery related", key: "Delivery" },
    { text: "Login and My Account", key: "Login" },
    { text: "Refunds related", key: "Refunds" },
    { text: "Flipkart Pay Later", key: "PayLater" },
    { text: "Payment", key: "Payment" },
    { text: "Return & Pickup related", key: "Return" },
    { text: "Cancellation related", key: "Cancellation" },
    { text: "Grocery", key: "Grocery" },
    { text: "SuperCoins ", key: "SuperCoins" },
    { text: "Flipkart Plus ", key: "Plus" },
    { text: "Flipkart Travel ", key: "Travel" },
    { text: "2 Wheelers ", key: "Wheelers" },
    { text: "Others ", key: "Others" },
    { text: "VIP ", key: "VIP" },
  ];

  const drawer = (
    <div className="p-3 m-3">
      <List>
        <div className="flex py-4">
          <h4
            style={{
              fontSize: "14px",
              padding: "22px 16px 0 32px",
              color: "#212121",
            }}
          >
            TYPES of ISSUE
          </h4>
        </div>
        {IssueTypes.map((item, index) => (
          <ListItem
            key={item.key}
            disablePadding
            onClick={() => setSelectedNotification(item.key)}
            selected={selectedNotification === item.key}
            style={{ padding: "13px 40px" }}
          >
            <ListItemText primary={item.text} style={{ fontSize: "14px" }} />
          </ListItem>
        ))}
        <div className="flex py-4">
          <h4
            style={{
              fontSize: "14px",
              padding: "22px 16px 0 32px",
              color: "#212121",
            }}
          >
            HELP TOPICS
          </h4>
        </div>
        {HelpTypes.map((item, index) => (
          <ListItem
            key={item.key}
            disablePadding
            onClick={() => setSelectedNotification(item.key)}
            selected={selectedNotification === item.key}
            style={{ padding: "13px 40px" }}
          >
            <ListItemText primary={item.text} style={{ fontSize: "14px" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Component>
        {notification.map((temp, index) => (
          <Container key={index}>
            <Text>{temp.text}</Text>
          </Container>
        ))}
      </Component>

      <Box
        sx={{
          margin: {
            sm: "0px 0px",
            lg: "10px 100px",
          },
          padding: "10px",
        }}
      >
        <h1 className="text-lg font-bold">
          Flipkart Help Center | 24x7 Customer Care Support
        </h1>
        <p className="text-xs text-[#878787] my-1 ">
          The Flipkart Help Centre page lists out various types of issues that
          you may have encountered so that there can be quick resolution and you
          can go back to shopping online. For example, you can get more
          information regarding order tracking, delivery date changes, help with
          returns (and refunds), and much more. The Flipkart Help Centre also
          lists out more information that you may need regarding Flipkart Plus,
          payment, shopping, and more. The page has various filters listed out
          on the left-hand side so that you can get your queries solved quickly,
          efficiently, and without a hassle. You can get the Flipkart Help
          Centre number or even access Flipkart Help Centre support if you need
          professional help regarding various topics. The support executive will
          ensure speedy assistance so that your shopping experience is positive
          and enjoyable. You can even inform your loved ones of the support page
          so that they can properly get their grievances addressed as well. Once
          you have all your queries addressed, you can pull out your shopping
          list and shop for all your essentials in one place. You can shop
          during festive sales to get your hands on some unbelievable deals
          online. This information is updated on 29-Sep-23
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          margin: {
            sm: "0px 0px",
            lg: "0px 100px",
          },
        }}
      >
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                flexShrink: 0,
                maxHeight: "500px",
                position: "unset",
                marginY: "20px",
                overflow: "auto",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <div
          style={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 2,
              // width: "100%",
              border: "1px solid #ededed",
              background: "#FFFFFF",
              margin: "20px",
            }}
          >
            <Typography
              style={{
                fontSize: "12px",
                color: "#878787",
                display: "inline-block",
              }}
            >
              {" "}
              Help Center{" "}
            </Typography>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              // width: { sm: `calc(100% - ${drawerWidth}px)` },
              // width: "100%",
              border: "1px solid #ededed",
              background: "#FFFFFF",
              margin: "20px",
              maxHeight: "auto ",
              height: "auto",
            }}
          >
            {selectedNotification === "Help1" && <Help />}
            {selectedNotification === "Help2" && <Help />}
            {selectedNotification === "Help3" && <Help2 />}
            {selectedNotification === "Delivery" && <Delivery />}
            {selectedNotification === "Login" && <Login />}
            {selectedNotification === "Refunds" && <Refund />}
            {selectedNotification === "PayLater" && <PayLater />}
            {selectedNotification === "Payment" && <Payment />}
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Customer;
