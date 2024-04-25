import React from "react";
import { Routes, Route,useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import HotelDetails from "./HotelDetails";
import HotelList from "./HotelList";
import { useEffect } from "react";
import Hotel from "./Hotel";
import Payment from "./Payment";
const AllRoutes = () => {
  const {pathname}=useLocation()
  useEffect(()=>{
    window.scrollTo({top:0, behavior:'auto'})
  },[pathname])
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/hotel-list" element={<HotelList />}></Route>
      <Route path="/hotel-details/:id" element={<HotelDetails />}></Route>
      <Route path="/hotel" element={<Hotel/>} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  );
};

export default AllRoutes;
