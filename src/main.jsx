import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import Layout from "./Layout";
import { Location } from "./components/Location/Location";
import Campaigns from "./components/Campaigns/Campaigns";
import Screens from "./components/Screens/Screens";
import { Contact } from "./components/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/location" element={<Location />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/screens" element={<Screens />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
