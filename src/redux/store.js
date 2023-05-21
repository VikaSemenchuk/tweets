import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "../redux/slice";

 export const store = configureStore({
  reducer: {
    usersData: usersReducer
  },
});