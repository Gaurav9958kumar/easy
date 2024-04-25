import React, { useState } from "react";
import Navbar from "../components/dashboard/Navbar";
import ListNav from "../components/hotel-list/ListNav";
import styles from "./index.module.css";
import { IoStar } from "react-icons/io5";
import rooms from "../assets/image/room1.jpg";
import pool from "../assets/image/pool.jpg";
import bath from "../assets/image/bath.jpg";
import star from "../assets/image/star.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { FaLocationDot } from "react-icons/fa6";
import { MdPool } from "react-icons/md";
import { FaBedPulse } from "react-icons/fa6";
import { IoRestaurant } from "react-icons/io5";
import { GiWineBottle } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { Link } from "react-router-dom";
const HotelDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://16.16.217.47:8080/hotel/api/hotels/${id}`)
      .then(({ data }) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);
  console.log(data);
  const {
    name,
    address1,
    rating,
    airportCode,
    amenities,
    city,
    country,
    distanceFromAirport,
    image,
    landmark,
    locality,
    shortDescription,
    longDescription,
    postalCode,
    street,
  } = data;
  return (
    <div className={styles.Hotel_Container}>
      <Navbar />
      <ListNav />
      {Object.keys(data).length > 0 && (
        <div className={styles.details_page}>
          <div className={styles.details}>
            <div className={styles.leftbox}>
              <div className={styles.imgbox}>
                <img src={rooms} alt="" />
                <img src={pool} alt="" />
                <img src={bath} alt="" />
              </div>
              <div className={styles.star}>
                <IoStar size={"20"} />
                <IoStar size={"20"} />
                <IoStar size={"20"} />
                <IoStar size={"20"} />
                <IoStar size={"20"} />
              </div>
              <p className={styles.ruppe}>
                <span>&#8377;</span>6200/Night
              </p>
             <Link to="/payment"><button className={styles.booknow}>Book Now</button></Link> 
            </div>
            <div className={styles.rightbox}>
              <p className={styles.Abc}>{name}</p>
              <p className={styles.airport}>
                <span className={styles.span1}>{address1}</span> I{" "}
                {distanceFromAirport} km from {airportCode} Airport I{" "}
                {distanceFromAirport} km from {locality} Railway Station
              </p>
              <p className={styles.book_with}>Book with no Payment</p>
              <p className={styles.free_can}>Free Cancellation</p>
              <p className={styles.breakfast_incl}>Breakfast Included</p>
            </div>
          </div>
          <p className={styles.name_hotel}>{name}</p>
          <p className={styles.location_hotel}>
            <FaLocationDot /> {locality},{landmark},{city},{country}{" "}
          </p>
          <p className={styles.amenities}>Amenities at {name}</p>
          <div className={styles.amenities_box}>
            <div className={styles.poolbox}>
              <div className={styles.circle}>
                <MdPool size={"30"} />
              </div>
              <p className={styles.pool}>Pool</p>
            </div>
            <div className={styles.poolbox}>
              <div className={styles.circle}>
                <FaBedPulse size={"30"} />
              </div>
              <p className={styles.pool}>Spa</p>
            </div>
           
            <div className={styles.poolbox}>
              <div className={styles.circle}>
                <GiWineBottle size={"30"} />
              </div>
              <p className={styles.pool}>Bar</p>
            </div>
            <div className={styles.poolbox}>
              <div className={styles.circle}>
                <IoIosFitness size={"30"} />
              </div>
              <p className={styles.pool}>Gym</p>
            </div>
            <div className={styles.poolbox}>
              <div className={styles.circle}>
                <IoRestaurant size={"30"} />
              </div>
              <p className={styles.pool}>Restaurant</p>
            </div>
          </div>
          <p className={styles.about}>About {name}</p>
          <li>{longDescription}</li>

          <li>
            Located close to {landmark}, {name} is a family-themed beachside
            property with an impressive offering of comprehensive amenities for
            a memorable stay.
          </li>
          <li>{shortDescription}</li>
          <li>
            The famous {airportCode} Airports is {distanceFromAirport} KM away
            from this property.{" "}
          </li>
          <p className={styles.rules}>Property Rules</p>
          <li className={styles.checkin}>Check-in: 2 PM Check-out: 11 AM</li>
          <li className={styles.checkin}>Couple Friendly</li>
          <li className={styles.checkin}>Govt. ID, Driving License, Passport and Aadhar are accepted as ID proof(s)</li>
          <p className={styles.rating}>User Ratings & Reviews</p>
          <p className={styles.rate}>{rating}  Very Good Service</p>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;
// address1
// :
// "123 Main Street"
// address2
// :
// null
// airportCode
// :
// null
// amenities
// :
// "Pool, Spa, Fitness Center, Restaurant, Bar"
// attraction
// :
// {id: 1, attractionType: 'Park', name: 'Central Park'}
// bookingUrl
// :
// null
// brandCode
// :
// "MRT"
// chainCode
// :
// "MAR"
// city
// :
// "New York"
// country
// :
// "USA"
// currency
// :
// {id: 1, code: 'USD'}
// distanceFromAirport
// :
// 15
// email1
// :
// "info@marriottdowntown.com"
// email2
// :
// "reservations@marriottdowntown.com"
// faxNumber
// :
// "212-555-5678"
// id
// :
// 3
// image
// :
// "https://www.marriottdowntown.com/image.jpg"
// landmark
// :
// "Central Park"
// latitude
// :
// "40.7565"
// locality
// :
// "Downtown"
// longDescription
// :
// "Welcome to Marriott Downtown! Our hotel offers luxurious accommodations, fine dining, and world-class amenities to ensure a memorable stay."
// longitude
// :
// "-73.9876"
// mobileUrl
// :
// null
// name
// :
// "Marriott Downtown"
// phoneNumber
// :
// "212-555-1234"
// postalCode
// :
// "10001"
// rating
// :
// "4.8"
// roomCount
// :
// 200
// shortDescription
// :
// "Luxury hotel in the heart of downtown"
// state
// :
// "NY"
// street
// :
// "Main Street"
// userId
// :
// 1
// websiteUrl
// :
// "https://www.marriottdowntown.com"
