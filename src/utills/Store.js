import { configureStore } from "@reduxjs/toolkit";
import characterSlice from "./characterSlice";
const Store = configureStore({
  reducer: {
    char: characterSlice,
  },
});
export default Store;
