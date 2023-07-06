import { Travel } from "./Travel";

export interface Vehicle {
  _id?: string;
  patent: string;
  model: string;
  typeVehicle:
    | "Chasis Truck"
    | "Balancin Truck"
    | "Semirremolque"
    | "Tractor"
    | "";
  travels?: Travel[];
  picture?: string;
}
