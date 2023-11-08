import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Hero from "./components/Hero.jsx";
import Horarios from "./components/Horarios.jsx";
import Contacto from "./components/Contacto.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes element={<App />}>
          <Route index element={<Hero />} />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/horarios" element={<Horarios />} />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
