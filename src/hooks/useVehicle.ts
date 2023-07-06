import clientAxios from "../config/clientAxios";
import { Vehicle } from "../interfaces/Vehicle";
import { useAppDispatch } from "../store/store";
import {
  onGetVehicle,
  onGetVehicles,
  onNewVehicle,
  onUpdateVehicle,
  onDeleteVehicle,
  onErrorMessage,
} from "../store/vehicle/vehicleSlice";

export const useVehicle = () => {
  const dispatch = useAppDispatch();

  const startNewVehicle = async (vehicle: Vehicle) => {
    try {
      const { data } = await clientAxios.post("/vehicles", vehicle);
      dispatch(
        onErrorMessage({
          msg: "",
          error: false,
        })
      );
      dispatch(onNewVehicle(data));
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

  const startGetVehicle = async (vehicle: Vehicle) => {
    try {
      const { data } = await clientAxios(`/vehicles/${vehicle._id}`);
      dispatch(onGetVehicle(data));
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

  const startEditVehicle = async (vehicle: Vehicle) => {
    try {
      const { data } = await clientAxios.put(
        `/vehicles/${vehicle._id}`,
        vehicle
      );
      dispatch(onUpdateVehicle(data));
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

  const startDeleteVehicle = async (vehicle: Vehicle) => {
    try {
      await clientAxios.delete(`/vehicles/${vehicle._id}`);
      dispatch(onDeleteVehicle(vehicle._id));
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

  const startLoadingVehicle = async () => {
    try {
      const { data } = await clientAxios("/vehicles");
      dispatch(onGetVehicles(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    startNewVehicle,
    startGetVehicle,
    startEditVehicle,
    startDeleteVehicle,
    startLoadingVehicle,
  };
};
