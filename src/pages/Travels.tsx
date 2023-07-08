import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import { Travel as TravelProps } from "../interfaces/Travel";
import { useTravel } from "../hooks/useTravel";
import ModalTravelForm from "../components/ModalTravelForm";
import { IoAdd } from "react-icons/io5";
import Travel from "../components/Travel";

const Travels = () => {
  const [modalForm, setModalForm] = useState(false);
  const { startLoadingTravels } = useTravel();
  const { travels, travel } = useAppSelector((state) => state.travel);

  useEffect(() => {
    startLoadingTravels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [travels.length, travel]);

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
        <ModalTravelForm modalForm={modalForm} setModalForm={setModalForm} />
        <p className="w-full text-xl">Travels List</p>
      </div>
      <div className="bg-gray-50 shadow-sm rounded-md mt-5">
        <div className="hidden lg:flex w-full gap-4 text-center p-4 border-b-2 text-xl">
          <p className="w-1/12">Date</p>
          <p className="w-2/12">Driver</p>
          <p className="w-2/12">Assistant</p>
          <p className="w-2/12">Vehicle</p>
          <p className="w-2/12">Semirremolque</p>

          <p className="w-3/12">Actions</p>
        </div>
        <>
          {travels.length ? (
            travels.map((travel: TravelProps) => (
              <Travel key={travel._id} travel={travel} />
            ))
          ) : (
            <div className="text-center py-5 text-lg">Add a new travel</div>
          )}
        </>
      </div>
    </div>
  );
};

export default Travels;
