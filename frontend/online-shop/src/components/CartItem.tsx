import { Grid } from "@material-ui/core";
import CartItemI from "../models/CartItem";
import { Link } from "react-router-dom";

function CartItem(props: CartItemI) {
  const url = "/products/" + props.id;
  return (
    <Grid container>
      <Grid item>
        <Link to={url}>
          <li>
            {props.name} ({props.category}) | {props.price} $
          </li>
        </Link>
      </Grid>
    </Grid>
  );
}

export default CartItem;
