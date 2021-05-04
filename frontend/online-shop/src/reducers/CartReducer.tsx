import { CartActions, CartActionsEnum } from "../actions/CartActions";
import Product from "../models/Product";

export interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const CartReducer = (state = initialState, action: CartActions): CartState => {
  console.log(action);
  switch (action.type) {
    case CartActionsEnum.ADD_PRODDUCT_TO_CART_REQUEST:
      console.log("reducer_request");
      return {
        ...state,
      };
    case CartActionsEnum.ADD_PRODDUCT_TO_CART_SUCCESS:
      console.log("reducer_success");
      const newCart = state.cart;
      newCart.push(action.payload);
      return {
        ...state,
        cart: newCart,
      };
    default:
      console.log("reducer_default (error)");
      return state;
  }
};

export default CartReducer;
