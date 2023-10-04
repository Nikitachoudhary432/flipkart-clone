import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Component/header/Header";
import Home from "./Component/home/Home";
import {Footer} from "./Component/footer/Footer";
import DetailView from "./Component/detail/DetailView";
import Cart from "./Component/cart/Cart";
import Notification from "./Component/morePage/notificationPrefernce/Notification";
import Customer from "./Component/morePage/customerCare/Customer";
import Advertise from "./Component/morePage/advertise/Advertise";
import Download from "./Component/morePage/download/Download";
import SellerPage from "./Component/sellerPage/index";
import HeaderSeller from "./Component/header_seller/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Box style={{ marginTop: 54, background: "#ededed" }}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product/:id" element={<DetailView />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/advertise" element={<Advertise />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/seller" element={<SellerPage />} />
                  </Routes>
                </Box>
                <Footer />
              </>
            }
          />
          <Route
            path="/seller"
            element={
              <>
                <HeaderSeller />
                <Box style={{ marginTop: 75}}>
                  <Routes>
                    <Route path="/" element={<SellerPage />} />
                  </Routes>
                </Box>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
