import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const ProtectedRoutes = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 bg-gray-50">
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoutes;
