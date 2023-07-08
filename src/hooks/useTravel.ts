import clientAxios from "../config/clientAxios";
import { Travel } from "../interfaces/Travel";
import { useAppDispatch } from "../store/store";
import {
  onGetTravel,
  onGetTravels,
  onNewTravel,
  onUpdateTravel,
  onDeleteTravel,
  onErrorMessage,
} from "../store/travel/travelSlice";

export const useTravel = () => {
  const dispatch = useAppDispatch();

  const startNewTravel = async (travel: Travel) => {
    try {
      const { data } = await clientAxios.post("/travels", travel);
      dispatch(
        onErrorMessage({
          msg: "",
          error: false,
        })
      );
      dispatch(onNewTravel(data));
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

  const startGetTravel = async (travel: Travel) => {
    try {
      const { data } = await clientAxios(`/travels/${travel._id}`);
      dispatch(onGetTravel(data));
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

  const startEditTravel = async (travel: Travel) => {
    try {
      const { data } = await clientAxios.put(`/travels/${travel._id}`, travel);
      dispatch(onUpdateTravel(data));
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

  const startDeleteTravel = async (travel: Travel) => {
    try {
      await clientAxios.delete(`/travels/${travel._id}`);
      dispatch(onDeleteTravel(travel._id));
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

  const startLoadingTravels = async () => {
    try {
      const { data } = await clientAxios("/travels");
      dispatch(onGetTravels(data));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    startNewTravel,
    startGetTravel,
    startEditTravel,
    startDeleteTravel,
    startLoadingTravels,
  };
};
