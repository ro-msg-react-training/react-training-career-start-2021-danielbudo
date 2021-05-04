import {applyMiddleware, createStore} from 'redux';
import RootReducer from '../reducers/rootReducer';
import {CartState} from '../reducers/CartReducer';
import createSagaMiddleware from 'redux-saga';
import {watchAddProductToCartAsync} from "../sagas/CartSaga"
import { compose } from 'redux';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

export interface AppState {
    cart: CartState;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchAddProductToCartAsync);