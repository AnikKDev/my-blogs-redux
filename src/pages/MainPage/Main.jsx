import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../SharedPages/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="border-2 border-red-600 pt-16 max-w-7xl w-10/12 mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
