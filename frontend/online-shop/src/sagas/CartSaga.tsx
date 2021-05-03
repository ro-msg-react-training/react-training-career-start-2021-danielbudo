import {
  addProductToCartError,
  addProductToCartSuccess,
  CartActions,
  CartActionsEnum,
} from "../actions/CartActions";
import Product from "../models/Product";
import { takeEvery, put, call } from "redux-saga/effects";
import { getProductById } from "../services/getProductById";

function* addProductToCartAsync(action: CartActions) {
  try {
    const result: Product = yield call(() => {
      let prodId: number = 1;

      if (typeof action.payload === typeof prodId) {
        prodId = action.payload;
        console.log("gets type number");
      } else {
        prodId = action.payload.id;
        console.log("gets type product");
      }

      console.log("ProdId: " + prodId);
      const aux = getProductById(prodId).then((response) => {
        console.log("Response: " + response);
        return response.data;
      });
      return aux;
    });
    yield put(addProductToCartSuccess(result));
    console.log("dupa success");
  } catch (err) {
    yield put(addProductToCartError());
  }
}
export function* watchAddProductToCartAsync() {
  yield takeEvery(
    CartActionsEnum.ADD_PRODDUCT_TO_CART_REQUEST,
    addProductToCartAsync
  );
}
