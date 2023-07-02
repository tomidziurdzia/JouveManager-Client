import clientAxios from "../config/clientAxios";
import { Employee } from "../interfaces/Employee";
import {
  onErrorMessage,
  onGetEmployees,
  onNewEmployee,
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

  const startLoadingEmployees = async () => {
    try {
      const { data } = await clientAxios("/employees");
      dispatch(onGetEmployees(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    startNewEmployee,
    startLoadingEmployees,
  };
};
