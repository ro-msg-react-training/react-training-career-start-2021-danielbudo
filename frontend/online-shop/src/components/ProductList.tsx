import ProductItem from "./ProductItem";
import { useProductListStyles } from "../styles/ProductListStyle";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Product from "../models/Product";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { store } from "../stores/store";

const url: string = "http://localhost:4000";

function ProductList() {
  const classes = useProductListStyles();
  const [loading, setLoading] = useState(true);

  /*
  Default product list (until the products are loaded,
  this will be the content of the list)
  */
  const [productList, setProductList] = useState([
    {
      name: "Product",
      category: "Category",
      price: 1,
      id: 0,
    },
    {
      name: "Product",
      category: "Category",
      price: 1,
      id: 0,
    },
    {
      name: "Product",
      category: "Category",
      price: 1,
      id: 0,
    },
    {
      name: "Product",
      category: "Category",
      price: 1,
      id: 0,
    },
    {
      name: "Product",
      category: "Category",
      price: 1,
      id: 0,
    },
  ]);

  /*
  After rendering, get the product list from the axios response
  into the product list that's displayed on the webpage
  */
  useEffect(() => {
    async function get() {
      let response: AxiosResponse<Product[]> = await axios.get(
        `${url}/products`
      );
      setProductList(response.data);
    }
    get().then(() => setLoading(false));
  }, []);

  /*
  Create a variable where the data from the product list is mapped to
  a JSX object of type 'ProductItem'
  */
  let products = productList.map((product: Product, index: number) => (
    <ProductItem key={index} {...product} />
  ));
  console.log("Pr List:" + store.getState().cart.cart.toString());
  return (
    <div>
      {loading ? (
        <p>Loading items ...</p>
      ) : (
        <div>
          <Grid container className="header">
            <Typography className={classes.h1} component={"div"}>
              Products
            </Typography>
            <div className={classes.shoppingCartIcon}>
              <Link to="/cart">
                <ShoppingCartIcon />
              </Link>
            </div>
          </Grid>
          <div className={classes.productList}>
            <Grid container>{products}</Grid>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
