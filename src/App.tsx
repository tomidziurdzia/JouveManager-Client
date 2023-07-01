import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import PublicRoutes from "./layouts/PublicRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<PublicRoutes />} />
        <Route path="/*" element={<Navigate to="/auth/signin" />} />

        <Route path="/*" element={<ProtectedRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
