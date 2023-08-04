import React from 'react'
import { Shipment } from '../interfaces/Shipment';
import { formatDate } from '../helpers/formatDate';

interface Props {
  shipment: Shipment;
}

const Shipment = ({shipment}:Props) => {
  console.log(shipment)

  const date = formatDate(shipment.travel?.date as Date);

  return (
    <div className="flex px-4 py-2 gap-4 text-center items-center border-gray-100 border-b-2 text-lg">
      <p className="w-1/12">{date}</p>
      <p className="w-2/12">{shipment.travel?.driver?.lastname} {shipment.travel?.driver?.name}</p>
      <p className="w-1/12">{shipment.travel?.vehicle?.patent}</p>
      <p className="w-2/12">{shipment.from}</p>
      <p className="w-2/12">{shipment.to}</p>
      <p className="w-3/12">{shipment.client}</p>
      <div className="w-1/12 flex justify-center text-white gap-4">
        <button className="bg-green-300 hover:opacity-60 p-2 rounded-lg shadow-sm w-full">
          View
        </button>

      </div>

    </div>
  );
}

export default Shipment