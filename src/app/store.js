import { configureStore } from "@reduxjs/toolkit";
import msgReducer from "../features/msgSlice";

const store = configureStore({
  reducer: {
    msg: msgReducer,
  },
});

export default store;
