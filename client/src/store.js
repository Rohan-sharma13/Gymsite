// import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./basketSlice";

export default configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
