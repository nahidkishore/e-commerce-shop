import { createStore, combineReducers } from "redux";
import ProductReducer from "./reducers/ProductReducer";
import CartReducer from "./reducers/CartReducer";
import { devToolsEnhancer } from "redux-devtools-extension";
const root = combineReducers({
  ProductReducer,
  CartReducer,
});
const store = createStore(root, devToolsEnhancer());
export default store;
