import { createSlice } from "@reduxjs/toolkit";
import { Error } from "../../interfaces/Error";
import { Vehicle } from "../../interfaces/Vehicle";

interface VehicleState {
  vehicles: Vehicle[];
  vehicle: Vehicle | null;
  errorMessage: Error | undefined;
}

const initialState: VehicleState = {
  vehicles: [],
  vehicle: null,
  errorMessage: undefined,
};

export const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    onGetVehicle: (state, { payload }) => {
      state.vehicle = payload;
      state.errorMessage = undefined;
    },
    onGetVehicles: (state, { payload }) => {
      state.vehicles = payload;
      state.errorMessage = undefined;
    },
    onNewVehicle: (state, { payload }) => {
      state.vehicles = [...state.vehicles, payload];
    },
    onUpdateVehicle: (state, { payload }) => {
      state.vehicles = state.vehicles.map((vehicle) => {
        if (vehicle._id === payload._id) {
          return payload;
        }
        return vehicle;
      });
      state.vehicle = null;
    },

    onDeleteVehicle: (state, { payload }) => {
      state.vehicles = state.vehicles.filter(
        (vehicle) => vehicle._id !== payload
      );
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
  onGetVehicle,
  onGetVehicles,
  onNewVehicle,
  onUpdateVehicle,
  onDeleteVehicle,
  onErrorMessage,
  clearErrorMessage,
} = vehicleSlice.actions;
export default vehicleSlice.reducer;
