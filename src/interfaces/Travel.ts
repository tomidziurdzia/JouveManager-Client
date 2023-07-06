import { Employee } from "./Employee";
import { Vehicle } from "./Vehicle";
import { Shipment } from "./Shipment";

export interface Travel {
  _id?: string;
  date: Date;
  driver: Employee;
  assistant: Employee;
  shipments: Shipment[];
  vehicle: Vehicle;
}
