import { Error } from "../interfaces/Error";

const Alert = ({ msg, error }: Error) => {
  return (
    <div
      className={`${
        error
          ? "bg-red-100 border-l-4 border-red-500 text-red-700 mb-4"
          : "bg-primary text-white mb-4"
      } text-center p-1 rounded-md text-sm`}
    >
      {msg}
    </div>
  );
};

export default Alert;
