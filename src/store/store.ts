import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../domain/usecases/auth-slice";
import scheduleDaySliceReducer from "../domain/usecases/schedule-slice"; // Utilisez le nom par défaut lors de l'importation

export const reducer = combineReducers({
  auth: authSlice,
  scheduleDay: scheduleDaySliceReducer, // Utilisez le nom de la constante avec le nom par défaut
});
