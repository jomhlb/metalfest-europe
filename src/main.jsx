import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./pages/Accueil/index";
import Error from "./pages/Error/index";
import Layout from "./components/Layout/index";

import "./styles/main.scss";
import "./leafletConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        <Layout>
          <Accueil />
        </Layout>
      }/>

      <Route path="*" element={
        <Layout>
          <Error />
        </Layout>
      }/>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
