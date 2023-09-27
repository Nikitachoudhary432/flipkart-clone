import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./Component/header/Header";
import Home from "./Component/home/Home";
import { Footer } from "./Component/footer/Footer";
import DetailView from "./Component/detail/DetailView";
import Cart from "./Component/cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
