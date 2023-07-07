import { Employee } from "./Employee";
import { Vehicle } from "./Vehicle";
import { Shipment } from "./Shipment";

export interface Travel {
  _id?: string;
  date: Date | string;
  driver: Employee | undefined;
  assistant: Employee | undefined;
  shipments?: Shipment[];
  vehicle: Vehicle | undefined;
  semirremolque: Vehicle | undefined;
}
