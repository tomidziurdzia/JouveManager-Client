import { createSlice } from "@reduxjs/toolkit";
import { Error } from "../../interfaces/Error";
import { Shipment } from "../../interfaces/Shipment";

interface ShipmentState {
  shipments: Shipment[];
  shipment: Shipment | null;
  errorMessage: Error | undefined;
}

const initialState: ShipmentState = {
  shipments: [],
  shipment: null,
  errorMessage: undefined,
};

export const shipmentSlice = createSlice({
  name: "shipment",
  initialState,
  reducers: {
    onGetShipment: (state, { payload }) => {
      state.shipment = payload;
      state.errorMessage = undefined;
    },
    onGetShipments: (state, { payload }) => {
      state.shipments = payload;
      state.errorMessage = undefined;
    },
    onNewShipment: (state, { payload }) => {
      state.shipments = [...state.shipments, payload];
    },
    onUpdateShipment: (state, { payload }) => {
      state.shipments = state.shipments.map((shipment) => {
        if (shipment._id === payload._id) {
          return payload;
        }
        return shipment;
      });
      state.shipment = null;
    },

    onDeleteShipment: (state, { payload }) => {
      state.shipments = state.shipments.filter(
        (shipment) => shipment._id !== payload
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
  onGetShipment,
  onGetShipments,
  onNewShipment,
  onUpdateShipment,
  onDeleteShipment,
  onErrorMessage,
  clearErrorMessage,
} = shipmentSlice.actions;
export default shipmentSlice.reducer;
