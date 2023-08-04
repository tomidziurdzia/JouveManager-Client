import { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { useAppSelector } from "../store/store";
import ModalShipmentForm from "../components/ModalShipmentForm";
import { useShipment } from "../hooks/useShipment";
import Shipment from "../components/Shipment";
import { Shipment as ShipmentProps } from "../interfaces/Shipment";


const Shipments = () => {
 
  const [modalForm, setModalForm] = useState(false);
  const { startLoadingShipments } = useShipment();
  const { shipments } = useAppSelector((state) => state.shipment);

  useEffect(() => {
    startLoadingShipments();
  }, [shipments.length]);

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
        <ModalShipmentForm modalForm={modalForm} setModalForm={setModalForm} />
        <p className="w-full text-xl">Shipments List</p>
      </div>
      <div className="bg-gray-50 shadow-sm rounded-md mt-5">
        <div className="hidden lg:flex w-full text-center p-4 border-b-2 text-xl">
          <p className="w-1/12">Date</p>
          <p className="w-2/12">Driver</p>
          <p className="w-1/12">Vehicle</p>
          <p className="w-2/12">From</p>
          <p className="w-2/12">To</p>
          <p className="w-3/12">Client</p>
          <p className="w-1/12">Action</p>
        </div>
        <>
          {shipments.length ? (
            shipments.map((shipment: ShipmentProps) => (
              <Shipment key={shipment._id} shipment={shipment} />
            ))
          ) : (
            <div className="text-center py-5 text-lg">Add a new shipment</div>
          )}
        </>
      </div>
    </div>
  );
};

export default Shipments;
