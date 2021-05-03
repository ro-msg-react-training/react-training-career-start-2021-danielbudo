import Product from "../models/Product";

export enum CartActionsEnum {
  ADD_PRODDUCT_TO_CART_REQUEST = "ADD_PRODDUCT_TO_CART_REQUEST",
  ADD_PRODDUCT_TO_CART_SUCCESS = "ADD_PRODDUCT_TO_CART_REQUEST",
  ADD_PRODDUCT_TO_CART_ERROR = "ADD_PRODDUCT_TO_CART_ERROR",
}

export interface CartActions {
  type: string;
  payload: any;
}

export const addProductToCartRequest = (id: number) => {
  return {
    type: CartActionsEnum.ADD_PRODDUCT_TO_CART_REQUEST,
    payload: id,
  };
};

export const addProductToCartSuccess = (product: Product) => {
  return {
    type: CartActionsEnum.ADD_PRODDUCT_TO_CART_SUCCESS,
    payload: product,
  };
};

export const addProductToCartError = () => {
  return {
    type: CartActionsEnum.ADD_PRODDUCT_TO_CART_ERROR,
  };
};
