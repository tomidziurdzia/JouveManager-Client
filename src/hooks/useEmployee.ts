import clientAxios from "../config/clientAxios";
import { Employee } from "../interfaces/Employee";
import {
  onDeleteEmployee,
  onErrorMessage,
  onGetEmployee,
  onGetEmployees,
  onNewEmployee,
  onUpdateEmployee,
} from "../store/employee/employeeSlice";
import { useAppDispatch } from "../store/store";

export const useEmployee = () => {
  const dispatch = useAppDispatch();

  const startNewEmployee = async (employee: Employee) => {
    try {
      const { data } = await clientAxios.post("/employees", employee);
      dispatch(
        onErrorMessage({
          msg: "",
          error: false,
        })
      );
      dispatch(onNewEmployee(data));
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(
        onErrorMessage({
          msg: error.response.data.msg,
          error: true,
        })
      );
    }
  };

  const startGetEmployee = async (employee: Employee) => {
    try {
      const { data } = await clientAxios(`/employees/${employee._id}`);
      dispatch(onGetEmployee(data));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(
        onErrorMessage({
          msg: error.response.data.msg,
          error: true,
        })
      );
    }
  };

  const startEditEmployee = async (employee: Employee) => {
    try {
      const { data } = await clientAxios.put(
        `/employees/${employee?._id}`,
        employee
      );
      dispatch(onUpdateEmployee(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch(
        onErrorMessage({
          msg: error.response.data.msg,
          error: true,
        })
      );
    }
  };

  const startDeleteEmployee = async (employee: Employee) => {
    try {
      await clientAxios.delete(`/employees/${employee._id}`);
      dispatch(onDeleteEmployee(employee._id));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      dispatch(
        onErrorMessage({
          msg: error.response.data.msg,
          error: true,
        })
      );
    }
  };

  const startLoadingEmployees = async () => {
    try {
      const { data } = await clientAxios("/employees");
      dispatch(onGetEmployees(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    startGetEmployee,
    startNewEmployee,
    startLoadingEmployees,
    startEditEmployee,
    startDeleteEmployee,
  };
};
