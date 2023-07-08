import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useAppSelector } from "../store/store";
import { Vehicle as VehicleProps } from "../interfaces/Vehicle";
import Vehicle from "../components/Vehicle";
import ModalVehicleForm from "../components/ModalVehicleForm";
import { useVehicle } from "../hooks/useVehicle";

const Vehicles = () => {
  const [modalForm, setModalForm] = useState(false);
  const { startLoadingVehicle } = useVehicle();
  const { vehicles } = useAppSelector((state) => state.vehicle);

  useEffect(() => {
    startLoadingVehicle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vehicles.length]);

  const handleClick = () => {
    setModalForm(!modalForm);
  };

  return (
    <div className="p-4">
      <div className="flex items-center gap-10">
        <button
          onClick={handleClick}
          className="bg-primary mr-4 text-white text-3xl p-1 flex justify-center items-center rounded-full hover:opacity-80 hover:transition-colors"
        >
          <IoAdd />
        </button>
        <ModalVehicleForm modalForm={modalForm} setModalForm={setModalForm} />
        <p className="w-full text-xl">Vehicles List</p>
      </div>
      <div className="bg-gray-50 shadow-sm rounded-md mt-5">
        <div className="hidden lg:flex w-full text-center p-4 border-b-2 text-xl">
          <p className="w-2/12">Picture</p>
          <p className="w-2/12 text-left">Patent</p>
          <p className="w-3/12 text-left">Model</p>
          <p className="w-2/12 text-left">Type</p>
          <p className="w-3/12">Actions</p>
        </div>
        <>
          {vehicles.length ? (
            vehicles.map((vehicle: VehicleProps) => (
              <Vehicle key={vehicle._id} vehicle={vehicle} />
            ))
          ) : (
            <div className="text-center py-5 text-lg">Add a new vehicle</div>
          )}
        </>
      </div>
    </div>
  );
};

export default Vehicles;
