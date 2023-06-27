import { Error } from "./Error";
import { User } from "./User";

export interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  user: User | null;
  errorMessage: Error;
  loading: boolean;
}
