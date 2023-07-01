import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import PublicRoutes from "./layouts/PublicRoutes";
import { useAppSelector } from "./store/store";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import Spinner from "./components/Spinner";

const App = () => {
  const { status } = useAppSelector((state) => state.auth);
  const { checkAuthToken } = useAuth();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {status === "not-authenticated" ? (
          <>
            <Route path="/auth/*" element={<PublicRoutes />} />
            <Route path="/*" element={<Navigate to="/auth/signin" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<ProtectedRoutes />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
