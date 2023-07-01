import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import PublicRoutes from "./layouts/PublicRoutes";
import { useAppSelector } from "./store/store";
import { useAuth } from "./hooks/useAuth";
import { useEffect } from "react";
import Spinner from "./components/Spinner";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Vehicles from "./pages/Vehicles";
import Travels from "./pages/Travels";
import Shipments from "./pages/Shipments";

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
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route index element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/travels" element={<Travels />} />
              <Route path="/shipments" element={<Shipments />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
