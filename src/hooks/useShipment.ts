import clientAxios from "../config/clientAxios";
import { Shipment } from "../interfaces/Shipment";
import { useAppDispatch } from "../store/store";
import {
  onGetShipment,
  onGetShipments,
  onNewShipment,
  onUpdateShipment,
  onDeleteShipment,
  onErrorMessage,
} from "../store/shipment/shipmentSlice";

export const useShipment = () => {
  const dispatch = useAppDispatch();

  const startNewShipment = async (shipment: Shipment) => {
    try {
      const { data } = await clientAxios.post("/shipments", shipment);
      dispatch(
        onErrorMessage({
          msg: "",
          error: false,
        })
      );
      dispatch(onNewShipment(data));
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

  const startGetShipment = async (shipment: Shipment) => {
    try {
      const { data } = await clientAxios(`/shipments/${shipment._id}`);
      dispatch(onGetShipment(data));
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

  const startEditShipment = async (shipment: Shipment) => {
    try {
      const { data } = await clientAxios.put(
        `/shipments/${shipment._id}`,
        shipment
      );
      dispatch(onUpdateShipment(data));
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

  const startDeleteShipment = async (shipment: Shipment) => {
    try {
      await clientAxios.delete(`/shipments/${shipment._id}`);
      dispatch(onDeleteShipment(shipment._id));
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

  const startLoadingShipments = async () => {
    try {
      const { data } = await clientAxios("/shipments");
      dispatch(onGetShipments(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    startNewShipment,
    startGetShipment,
    startEditShipment,
    startDeleteShipment,
    startLoadingShipments,
  };
};
