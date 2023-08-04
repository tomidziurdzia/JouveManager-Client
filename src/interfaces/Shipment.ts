import { Travel } from "./Travel";

export interface Shipment {
  _id?: string;
  travel: Travel | undefined;
  from: string;
  to: string;
  client: string;
  description?: string;
  delivered?: boolean;
  reason?: string;
  picture?: string;
}
