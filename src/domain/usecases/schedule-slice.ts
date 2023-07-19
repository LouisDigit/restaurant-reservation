import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import {
  BookCredential,
  ScheduleDayState,
  ScheduleState,
} from "../entities/schedule-types";
import { RootState } from "../..";
import { PayloadAction } from "@reduxjs/toolkit";
import { getDocs, query, where, setDoc, doc, addDoc } from "firebase/firestore";
import { db } from "../..";
import { collection } from "firebase/firestore";

const initialState: ScheduleDayState = {
  date: null,
  listSchedule: [],
  loading: false,
  error: null,
  showPopup: false,
  success: null,
};

export const addSchedule = createAsyncThunk(
  "addSchedule",
  async (req: BookCredential, thunkAPI) => {
    try {
      // Get the date
      const year = req.date.getFullYear();
      const month = req.date.getMonth();
      const day = req.date.getDay();

      // Get the timing
      const hours = parseInt(req.timing.slice(0, 2), 10);
      const minutes = parseInt(req.timing.slice(-2), 10);

      // Create a new Date Object
      const newDate = new Date(year, month, day, hours, minutes);

      // Add new document in Firebase Store
      await addDoc(collection(db, "schedule"), {
        name: req.name,
        date: newDate,
        amount: req.amount,
      });
      return req.name;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const setScheduleDay = createAsyncThunk(
  "setScheduleDay",
  async (req: Date, thunkAPI) => {
    try {
      const targetDate = req; // Date cible

      // Définir la date cible au début de la journée en ignorant l'heure
      targetDate.setHours(0, 0, 0, 0);

      // Définir la date cible à la fin de la journée en ignorant l'heure
      const endOfTargetDate = new Date(targetDate);
      endOfTargetDate.setHours(23, 59, 59, 999);

      // Créer une requête avec la clause where pour filtrer par date
      const queryDate = query(
        collection(db, "schedule"), // Remplacez "votre_collection" par le nom de votre collection Firestore
        where("date", ">=", targetDate),
        where("date", "<=", endOfTargetDate)
      );

      // Exécuter la requête
      const scheduleDayQuery = await getDocs(queryDate);

      let arraySchedule: ScheduleState[] = [];
      scheduleDayQuery.forEach((doc) => {
        const newValue = {
          name: doc.data().name,
          dateTime: doc.data().date,
          amount: doc.data().amount,
        };
        arraySchedule = arraySchedule.concat(newValue);
      });
      console.log({
        listSchedule: arraySchedule,
        date: req,
      });
      return {
        listSchedule: arraySchedule,
        date: req,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const scheduleDaySlice = createSlice({
  name: "scheduleDay",
  initialState,
  reducers: {
    disabledPopup: (state) => {
      state.date = null;
      state.error = null;
      state.listSchedule = [];
      state.loading = false;
      state.showPopup = false;
    },
    resetSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setScheduleDay.pending, (state, _) => {
      state.loading = true;
      state.showPopup = false;
    });
    builder.addCase(setScheduleDay.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.listSchedule = action.payload.listSchedule;
      state.date = action.payload.date.toISOString();
      state.showPopup = true;
    });
    builder.addCase(setScheduleDay.rejected, (state, _) => {
      state.loading = false;
      state.error = "An error has occured";
      state.listSchedule = [];
      state.date = null;
      state.showPopup = false;
    });
    builder.addCase(addSchedule.pending, (state, _) => {
      state.loading = true;
    });
    builder.addCase(addSchedule.fulfilled, (state, action) => {
      state.success = "Réservation effectué au nom de " + action.payload;
      state.loading = false;
    });
    builder.addCase(addSchedule.rejected, (state, _) => {
      state.loading = false;
      state.error = "An error has occured";
    });
  },
});

export const scheduleDaySelector: (state: RootState) => ScheduleDayState = (
  state: RootState
) => state.scheduleDay;

export const scheduleDayData = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.listSchedule;
  }
);

export const scheduleDayDate = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.date;
  }
);

export const scheduleDayLoading = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.loading;
  }
);

export const scheduleDayShowPopup = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.showPopup;
  }
);

export const scheduleDaySuccess = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.success;
  }
);

export const scheduleDayError = createSelector(
  scheduleDaySelector,
  (scheduleDay) => {
    return scheduleDay.error;
  }
);

export const { disabledPopup, resetSuccess } = scheduleDaySlice.actions;

export default scheduleDaySlice.reducer;
