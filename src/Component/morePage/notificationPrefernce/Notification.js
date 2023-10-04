import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Card, styled } from "@mui/material";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Desktop from "./Desktop";
import App from "./App";
import Sms from "./Sms";
import Email from "./Email";
import Whatsapp from "./Whatsapp";
import { notification } from "./../../../constant/data";

const drawerWidth = 340;

const Component = styled(Card)`
  border-top: 1px solid #f0f0f0;
  border-radius: 0px;
  display: flex;
  justify-content: space-between;
  /* background: none; */
`;

const Components = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "55px 130px 0 130px !important",
  overflowX: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
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

function Notification() {
  const [selectedNotification, setSelectedNotification] =
    React.useState("Desktop");
  const notificationTypes = [
    { text: "Desktop Notification", key: "Desktop" },
    { text: "In-App Notification", key: "App" },
    { text: "SMS", key: "Sms" },
    { text: "Email", key: "Email" },
    { text: "WhatsApp", key: "Whatsapp" },
  ];

  const drawer = (
    <div className="p-3 m-3">
      <List>
        <div className="flex py-4">
          <NotificationsIcon className="mr-2 text-blue-500" />
          <h1 className="text-[#878787]">NOTIFICATION PREFERENCES</h1>
        </div>
        {notificationTypes.map((item, index) => (
          <ListItem
            key={item.key}
            disablePadding
            onClick={() => setSelectedNotification(item.key)}
            selected={selectedNotification === item.key}
            style={{ padding: "16px 16px 16px 72px" }}
          >
            <ListItemText primary={item.text} style={{ fontSize: "14px" }} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Component
        sx={{
          padding: {
            lg: "0px 130px 0px 130px ",
            sm: "0px",
          },
        }}
      >
        {notification.map((temp, index) => (
          <Container key={index}>
            <Text>{temp.text}</Text>
          </Container>
        ))}
      </Component>

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
                height: "auto",
                position: "unset",
                marginTop: "20px",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            border: "1px solid #ededed",
            background: "#FFFFFF",
            margin: "20px",
            height: "500px ",
          }}
        >
          {selectedNotification === "Desktop" && <Desktop />}
          {selectedNotification === "App" && <App />}
          {selectedNotification === "Sms" && <Sms />}
          {selectedNotification === "Email" && <Email />}
          {selectedNotification === "Whatsapp" && <Whatsapp />}
        </Box>
      </Box>
    </div>
  );
}

export default Notification;
