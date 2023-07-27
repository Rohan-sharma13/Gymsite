import ProductReducer from "./Products/reducers";
import AccountReducer from "./SignUpComponents/reducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  account: AccountReducer,
  product: ProductReducer,
});

export default allReducers;
