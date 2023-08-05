import {
  IoArrowBack,
  IoBanOutline,
  IoPencil,
  IoPersonOutline,
} from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useEmployee } from "../hooks/useEmployee";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/store";
import { Employee } from "../interfaces/Employee";
import ModalEmployeeForm from "../components/ModalEmployeeForm";
import ModalDelete from "../components/ModalDelete";
import { formatDate } from "../helpers/formatDate";

const EmployeeDetail = () => {
  const { id } = useParams();
  const { startGetEmployee } = useEmployee();
  const { employee } = useAppSelector((state) => state.employee);
  console.log(employee?.travels)

  const [modalForm, setModalForm] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const handleClickEdit = async () => {
    await startGetEmployee(employee as Employee);
    setModalForm(!modalForm);
  };

  const handleClickDelete = () => {
    setModalDelete(!modalDelete);
  };

  useEffect(() => {
    startGetEmployee({
      _id: id,
      name: "",
      lastname: "",
      email: "",
      password: "",
      type: "",
    });
  }, [modalForm]);

  return (
    <div className="p-4">
      <div className="flex items-center gap-10 mb-4">
        <Link
          to={"/employees"}
          className="bg-primary mr-4 text-white text-3xl p-1 flex justify-center items-center rounded-full hover:opacity-80 hover:transition-colors"
        >
          <IoArrowBack />
        </Link>
        <p className="w-full text-xl">Employee Detail</p>
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <p className="text-8xl">
            {employee?.picture === "" ? <IoPersonOutline /> : employee?.picture}
          </p>
          <div>
            <p>
              {employee?.name} {employee?.lastname}
            </p>
            <p>Travels: {employee?.travels?.length}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClickEdit}
            className="bg-gray-300 hover:opacity-60 p-2 rounded-lg w-10 h-10 shadow-sm  text-2xl"
          >
            <IoPencil />
          </button>
          <button
            onClick={handleClickDelete}
            className="bg-red-300 hover:opacity-80 p-2 rounded-lg w-10 h-10 shadow-sm text-2xl"
          >
            <IoBanOutline />
          </button>
        </div>
      </div>
      <ModalEmployeeForm modalForm={modalForm} setModalForm={setModalForm} />
      <ModalDelete
        modalDelete={modalDelete}
        setModalDelete={setModalDelete}
        employee={employee as Employee}
      />
      <p className="w-full text-center text-xl">Travel Lists</p>
      {employee?.travels?.map((travel) => (
        <div key={travel._id}>
          <p>{formatDate(travel.date)}</p>
          <p>{travel.driver}</p>
        </div>
      ))}
    </div>
  );
};

export default EmployeeDetail;
