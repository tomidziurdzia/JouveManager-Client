import { createSlice } from "@reduxjs/toolkit";
import { Error } from "../../interfaces/Error";
import { Travel } from "../../interfaces/Travel";

interface TravelState {
  travels: Travel[];
  travel: Travel | null;
  errorMessage: Error | undefined;
}

const initialState: TravelState = {
  travels: [],
  travel: null,
  errorMessage: undefined,
};

export const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {
    onGetTravel: (state, { payload }) => {
      state.travel = payload;
      state.errorMessage = undefined;
    },
    onGetTravels: (state, { payload }) => {
      state.travels = payload;
      state.errorMessage = undefined;
    },
    onNewTravel: (state, { payload }) => {
      state.travels = [...state.travels, payload];
    },
    onUpdateTravel: (state, { payload }) => {
      state.travels = state.travels.map((travel) => {
        if (travel._id === payload._id) {
          return payload;
        }
        return travel;
      });
      state.travel = null;
    },

    onDeleteTravel: (state, { payload }) => {
      state.travels = state.travels.filter((travel) => travel._id !== payload);
    },
    onErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});

export const {
  onGetTravel,
  onGetTravels,
  onNewTravel,
  onUpdateTravel,
  onDeleteTravel,
  onErrorMessage,
  clearErrorMessage,
} = travelSlice.actions;
export default travelSlice.reducer;
