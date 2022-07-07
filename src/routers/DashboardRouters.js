import React from "react";
import { Route, Routes } from "react-router-dom";
import DataFirebase from "../components/enviarDataFirebase";

import Home from "../containers/Home";
import Pedidos from "../containers/Pedidos";

const DashboardRouters = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/receta" element={<DataFirebase />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </>
  );
};

export default DashboardRouters;
