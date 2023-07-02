import { createSlice } from "@reduxjs/toolkit";
import { Employee } from "../../interfaces/Employee";
import { Error } from "../../interfaces/Error";

interface EmployeeState {
  employees: Employee[];
  employee: Employee | null;
  errorMessage: Error | undefined;
}

const initialState: EmployeeState = {
  employees: [],
  employee: null,
  errorMessage: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onGetEmployee: (state, { payload }) => {
      state.employee = payload;
      state.errorMessage = undefined;
    },
    onGetEmployees: (state, { payload }) => {
      state.employees = payload;
      state.errorMessage = undefined;
    },
    onNewEmployee: (state, { payload }) => {
      state.employees = [...state.employees, payload];
    },
    onUpdateEmployee: (state, { payload }) => {
      state.employee = payload;
      state.errorMessage = payload;
    },
    onDeleteEmployee: (state, { payload }) => {
      state.employee = payload;
      state.errorMessage = payload;
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
  onGetEmployee,
  onGetEmployees,
  onNewEmployee,
  onUpdateEmployee,
  onDeleteEmployee,
  onErrorMessage,
  clearErrorMessage,
} = authSlice.actions;
export default authSlice.reducer;
