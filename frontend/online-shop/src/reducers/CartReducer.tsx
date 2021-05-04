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
    case CartActionsEnum.ADD_PRODUCT_TO_CART_SUCCESS:
      const newCart = state.cart;
      newCart.push(action.payload);
      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default CartReducer;
