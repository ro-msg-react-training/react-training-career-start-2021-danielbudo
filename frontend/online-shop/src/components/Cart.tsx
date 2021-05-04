import React, { useEffect, useState } from "react";
import { store } from "../stores/store";
import CartItemI from "../models/CartItem";
import CartItem from "./CartItem";
import { Button, Grid, Typography } from "@material-ui/core";
import { useCartStyles } from "../styles/CartStyle";

function Cart() {
  const classes = useCartStyles();
  const [itemList, setItemList] = useState([
    {
      id: 999,
      name: "Product",
      category: "Category",
      price: 0,
    },
  ]);

  useEffect(() => {
    let items = store.getState().cart.cart;
    setItemList(items);
  }, []);

  let items = itemList.map((item: CartItemI, index: number) => (
    <CartItem key={index} {...item} />
  ));

  return (
    <div className={classes.wrapper}>
      <Typography className={classes.title}>Shopping Cart</Typography>
      <Grid container className={classes.product}>
        {items}
      </Grid>
      <Grid container className={classes.button}>
        <Button variant="outlined">Checkout</Button>
      </Grid>
    </div>
  );
}
export default Cart;
