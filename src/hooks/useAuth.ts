import { onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import clientAxios from "../config/clientAxios";
import { useAppDispatch, useAppSelector } from "../store/store";

interface Business {
  email: string;
  password: string;
}

export const useAuth = () => {
  // const { status, business, errorMessage } = useAppSelector(
  //   (state) => state.auth
  // );
  const dispatch = useAppDispatch();

  const startLogin = async ({ email, password }: Business) => {
    dispatch(onChecking);
    try {
      const { data } = await clientAxios.post("/business/login", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      console.log(data);
      dispatch(onLogin({ businessName: data.businessName, email: data.email }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(onLogout({ msg: error.response.data.msg, error: true }));
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout(undefined));

    try {
      const { data } = await clientAxios("business/perfil");
      localStorage.setItem("token", data.token);
      dispatch(onLogin({ businessName: data.businessName, email: data.email }));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(onLogout({ msg: error.response.data.msg, error: true }));
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout(undefined));
  };

  return {
    startLogin,
    checkAuthToken,
    startLogout,
  };
};
