import { IoPersonOutline } from "react-icons/io5";
import { Employee } from "../interfaces/Employee";
import { useEmployee } from "../hooks/useEmployee";
import ModalEmployeeForm from "./ModalEmployeeForm";
import { useState } from "react";

interface Props {
  employee: Employee;
}

const Employee = ({ employee }: Props) => {
  const [modalForm, setModalForm] = useState(false);

  const { startGetEmployee } = useEmployee();
  const handleClickEdit = async () => {
    await startGetEmployee(employee);
    setModalForm(!modalForm);
  };

  return (
    <div className="flex px-4 py-2 items-center border-gray-100 border-b-2 text-lg">
      <div className="w-1/12">
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
        <button className="bg-green-200 p-2 rounded-lg shadow-sm w-full">
          View
        </button>
        <button
          onClick={handleClickEdit}
          className="bg-gray-300 p-2 rounded-lg shadow-sm w-full"
        >
          Edit
        </button>
        <button className="bg-red-200 p-2 rounded-lg shadow-sm w-full">
          Delete
        </button>
      </div>
      <ModalEmployeeForm modalForm={modalForm} setModalForm={setModalForm} />
    </div>
  );
};

export default Employee;