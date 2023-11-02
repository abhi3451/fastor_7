import React from "react";
import { Route, Routes } from "react-router-dom";

import RestaSingle from "./component/RestaSingle";

import RestaurantList from "./page/MainRestPage";
import RegisterPage from "./page/RegisterPage";
import OTP_page from "./page/OTP_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/otp" element={<OTP_page />} />
      <Route path="/restaurant" element={<RestaurantList />} />
      <Route path="/restaurant/:id" element={<RestaSingle />} />
    </Routes>
  );
}

export default App;
