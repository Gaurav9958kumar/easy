import React, { useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import ListNav from "../components/hotel-list/ListNav";
import SideNav from "../components/hotel-list/SideNav";
import HotelListCards from "../components/hotel-list/HotelListCards";
import styles from "./index.module.css";
import { useState } from "react";
import axios from "axios";
import Card from '../components/hotel-list/Card'
const HotelList = () => {
//  const [data,setData]=useState([])

//  useEffect(() => {
//   axios.get('http://13.53.207.97:8080/hotel/api/hotels')
//     .then(res => {
//       setData(res.data);
     
//     })
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
// }, []);
//  console.log(data)
  return (
    <div className={styles.hotellistcontainer}>
      <Navbar />
      <ListNav />
      <div className={styles.listContainer}>
        <SideNav />
        <HotelListCards />
        {/* {
      data?.length>0 && data.map((e)=>{
        return (
          <div key={e.id}>
            <Card   name={e.name} address1={e.address1} id={e.id} airportcode={e.airportCode} distancefromairport={e.distanceFromAirport} rating={e.rating}  image={e.image}  />
          </div>
          
        )
      })
     } */}
      </div>
    </div>
  );
};

export default HotelList;
