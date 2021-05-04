import React, { useEffect, useState } from "react";
import { store } from "../stores/store";
import CartItemI from "../models/CartItem";
import CartItem from "./CartItem";
import { Button, Grid } from "@material-ui/core";

function Cart() {
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
    <div>
      Shopping Cart
      <Grid container>{items}</Grid>
      <Grid container>
        <Button variant="outlined">Checkout</Button>
      </Grid>
    </div>
  );
}
export default Cart;
