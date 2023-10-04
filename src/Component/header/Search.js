import { useState, useEffect } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, List, ListItem, Box, styled } from "@mui/material";

import { useSelector, useDispatch } from "react-redux"; // hooks
import { searchProduct } from "../Action";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)(({ theme }) => ({
  borderRadius: "2px",
  marginLeft: "10px",
  width: "38%",
  backgroundColor: "#fff",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    width: "45%",
    marginLeft: "20px",
  },
  [theme.breakpoints.down("md")]: {
    width: "45%",
    marginLeft: "20px",
  },
}));

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const Search = () => {
  const [text, setText] = useState();
  const [open, setOpen] = useState(true);

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const { products } = product;

  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  useEffect(() => {
    dispatch(searchProduct());
  }, []);

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => setOpen(true)}
                >
                  {product.title}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
