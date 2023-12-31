import { IoPersonOutline } from "react-icons/io5";
import { Employee } from "../interfaces/Employee";
import { useEmployee } from "../hooks/useEmployee";
import ModalEmployeeForm from "./ModalEmployeeForm";
import { useState } from "react";
import ModalDelete from "./ModalDelete";

interface Props {
  employee: Employee;
}

const Employee = ({ employee }: Props) => {
  const [modalForm, setModalForm] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const { startGetEmployee } = useEmployee();
  const handleClickEdit = async () => {
    await startGetEmployee(employee);
    setModalForm(!modalForm);
  };

  const handleClickDelete = () => {
    setModalDelete(!modalDelete);
  };

  return (
    <div className="flex px-4 py-2 items-center border-gray-100 border-b-2 text-lg">
      <div className="w-2/12">
        <p className="w-1/2 m-auto flex text-8xl">
          {employee.picture === "" ? <IoPersonOutline /> : employee.picture}
        </p>
      </div>
      <div className="w-5/12">
        <p className="w-2/3 m-auto capitalize">
          {employee.lastname} {employee.name}
        </p>
      </div>

      <div className="w-2/12">
        <p className="m-auto capitalize">{employee.type}</p>
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
      <ModalEmployeeForm modalForm={modalForm} setModalForm={setModalForm} />
      <ModalDelete
        modalDelete={modalDelete}
        setModalDelete={setModalDelete}
        employee={employee}
      />
    </div>
  );
};

export default Employee;
