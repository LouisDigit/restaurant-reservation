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
import {
  getDocs,
  query,
  where,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
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
      // Create a new Date Object
      // Obtenir les parties jour, mois et année de la date
      const day = req.date.getDate().toString().padStart(2, "0"); // padStart ajoute un 0 devant si nécessaire
      const month = (req.date.getMonth() + 1).toString().padStart(2, "0"); // Les mois sont indexés à partir de 0, donc on ajoute 1
      const year = req.date.getFullYear();

      // Concaténer les parties dans le format "dd/mm/yyyy"
      const firebaseDate = `${day}/${month}/${year}`;

      // Add new document in Firebase Store
      await addDoc(collection(db, "schedule"), {
        name: req.name,
        date: firebaseDate,
        time: req.timing,
        amount: req.amount,
      });
      return req.name;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const getScheduleDay = createAsyncThunk(
  "setScheduleDay",
  async (req: Date, thunkAPI) => {
    try {
      const day = req.getDate().toString().padStart(2, "0"); // padStart ajoute un 0 devant si nécessaire
      const month = (req.getMonth() + 1).toString().padStart(2, "0"); // Les mois sont indexés à partir de 0, donc on ajoute 1
      const year = req.getFullYear();

      // Concaténer les parties dans le format "dd/mm/yyyy"
      const targetDate = `${day}/${month}/${year}`; // Date cible

      // // Créer une requête avec la clause where pour filtrer par date
      const queryDate = query(
        collection(db, "schedule"),
        where("date", "==", targetDate)
      );

      // // Exécuter la requête
      const scheduleDayQuery = await getDocs(queryDate);

      let arraySchedule: ScheduleState[] = [];
      scheduleDayQuery.forEach((doc) => {
        const newValue = {
          name: doc.data().name,
          date: doc.data().date,
          amount: doc.data().amount,
          time: doc.data().time,
          id: doc.id,
        };
        arraySchedule = arraySchedule.concat(newValue);
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

export const deleteSchedule = createAsyncThunk(
  "deleteSchedule",
  async (req: string, thunkAPI) => {
    try {
      console.log(req);
      const docRef = doc(db, "schedule", req); // Remplacez "votre_collection" par le nom de votre collection Firestore et docId par l'ID du document que vous souhaitez supprimer
      await deleteDoc(docRef);
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
    builder.addCase(getScheduleDay.pending, (state, _) => {
      state.loading = true;
      state.showPopup = false;
    });
    builder.addCase(getScheduleDay.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.listSchedule = action.payload.listSchedule;
      state.date = action.payload.date;
      state.showPopup = true;
    });
    builder.addCase(getScheduleDay.rejected, (state, _) => {
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
    builder.addCase(deleteSchedule.pending, (state, _) => {
      state.loading = true;
      state.showPopup = false;
    });
    builder.addCase(deleteSchedule.fulfilled, (state, _) => {
      state.loading = false;
      state.success = "Suppression de la reservation confirmé.";
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
