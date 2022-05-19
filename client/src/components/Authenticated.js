import React from "react";
import Home from "../pages/Home";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import CountryViewPage from "../pages/CountryViewPage";
import CityViewPage from "../pages/CityViewPage";
import ProfilePage from "../pages/ProfilePage";
import AdminPage from "../pages/AdminPage";

const Authenticated = () => {
  return <Outlet />;
};

export default Authenticated;
