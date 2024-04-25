import React, { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import ListCard from '../components/hotel-list/ListCard';
import Navbar from '../components/dashboard/Navbar';
import ListNav from '../components/hotel-list/ListNav';
import styles from './hotel.module.css'
import SideNav from '../components/hotel-list/SideNav';
const Hotel = () => {
    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get('http://16.16.217.47:8080/hotel/api/hotels').then((res)=>{
            setData(res.data)
        }).catch(error => {
            console.error('Error fetching data:', error);
          });
    },[])
    console.log(data)
  return (
    <div className={styles.hotel_container}>
        <Navbar/>
        <ListNav/>
        <div className={styles.hotel_product_container}>
            <SideNav/>
        <div className={styles.hotel_list}>
            <h1 className={styles.ht1}>Showing Luxury Properties</h1>
        {
        data?.length>0 && data.map((e)=>{
           return (
            <div key={e.id}>
               <ListCard name={e.name} address1={e.address1} id={e.id} airportcode={e.airportCode} distancefromairport={e.distanceFromAirport} rating={e.rating}  image={e.image}/>
            </div>
           )
        })
      }
        </div>
        </div>
     
    </div>
  );
}

export default Hotel;
