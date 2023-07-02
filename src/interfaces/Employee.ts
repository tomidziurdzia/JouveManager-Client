export interface Employee {
  _id?: string;
  name: string;
  lastname: string;
  email: string;
  picture?: string;
  password: string;
  type: "Administrative" | "Driver" | "Assistant" | "";
}
