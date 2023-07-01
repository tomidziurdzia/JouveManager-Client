import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default ProtectedRoutes;
