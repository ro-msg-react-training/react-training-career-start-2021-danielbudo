import { IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { store } from "../stores/store";

function ShoppingCartIcon() {
  return (
    <div>
      <IconButton>
        <ShoppingCart />
      </IconButton>
      Items in cart: {`${store.getState().cart.cart.length}`}
    </div>
  );
}

export default ShoppingCartIcon;
