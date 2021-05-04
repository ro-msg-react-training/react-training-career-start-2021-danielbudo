import { Grid } from "@material-ui/core";
import CartItemI from "../models/CartItem";

function CartItem(props: CartItemI) {
  return (
    <Grid container>
      <Grid item>{props.name}</Grid>
      <Grid item>{props.category}</Grid>
      <Grid item>{props.price}</Grid>
    </Grid>
  );
}

export default CartItem;
