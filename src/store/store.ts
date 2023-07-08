import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./auth/authSlice";
import employeeSlice from "./employee/employeeSlice";
import vehicleSlice from "./vehicle/vehicleSlice";
import travelSlice from "./travel/travelSlice";
import shipmentSlice from "./shipment/shipmentSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    employee: employeeSlice,
    vehicle: vehicleSlice,
    travel: travelSlice,
    shipment: shipmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
