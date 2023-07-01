import { Business } from "./Business";
import { Error } from "./Error";

export interface AuthState {
  status: "checking" | "not-authenticated" | "authenticated";
  business: Business | null;
  errorMessage: Error | undefined;
}
