import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../domain/usecases/auth-slice";

export const reducer = combineReducers({
  auth: authSlice,
});
