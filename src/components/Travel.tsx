import { useState } from "react";
import { Travel } from "../interfaces/Travel";
import { useTravel } from "../hooks/useTravel";
import ModalDelete from "./ModalDelete";
import ModalTravelForm from "./ModalTravelForm";
import { formatDate } from "../helpers/formatDate";

interface Props {
  travel: Travel;
}

const Travel = ({ travel }: Props) => {
  const [modalForm, setModalForm] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const { startGetTravel } = useTravel();

  const handleClickEdit = async () => {
    await startGetTravel(travel);
    setModalForm(!modalForm);
  };

  const handleClickDelete = () => {
    setModalDelete(!modalDelete);
  };

  const date = formatDate(travel.date as Date);

  return (
    <div className="flex px-4 py-2 items-center border-gray-100 border-b-2 text-lg">
      <p className="w-1/12 text-center">{date}</p>

      <div className="w-3/12">
        <p className="w-2/3 m-auto capitalize">
          {travel.driver?.lastname} {travel.driver?.name}
        </p>
      </div>
      <p className="w-3/12 capitalize">
        {travel.assistant?.lastname} {travel.assistant?.name}
      </p>

      <div className="w-2/12">
        <p className="m-auto capitalize">{travel.vehicle?.patent}</p>
      </div>
      <div className="w-3/12 flex justify-center text-white gap-4">
        <button className="bg-green-300 hover:opacity-60 p-2 rounded-lg shadow-sm w-full">
          View
        </button>
        <button
          onClick={handleClickEdit}
          className="bg-gray-300 hover:opacity-60 p-2 rounded-lg shadow-sm w-full"
        >
          Edit
        </button>
        <button
          onClick={handleClickDelete}
          className="bg-red-300 hover:opacity-80 p-2 rounded-lg shadow-sm w-full"
        >
          Delete
        </button>
      </div>
      <ModalTravelForm modalForm={modalForm} setModalForm={setModalForm} />
      <ModalDelete
        modalDelete={modalDelete}
        setModalDelete={setModalDelete}
        // vehicle={vehicle}
      />
    </div>
  );
};

export default Travel;
