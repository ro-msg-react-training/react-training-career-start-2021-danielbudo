import Product from "../models/Product";

export enum CartActionsEnum {
  ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS",
  ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR",
}

export interface CartActions {
  type: string;
  payload: any;
}

export const addProductToCartSuccess = (product: Product) => {
  return {
    type: CartActionsEnum.ADD_PRODUCT_TO_CART_SUCCESS,
    payload: product,
  };
};

export const addProductToCartError = () => {
  return {
    type: CartActionsEnum.ADD_PRODUCT_TO_CART_ERROR,
  };
};
