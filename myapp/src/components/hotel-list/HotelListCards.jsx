import React from "react";
import styles from "./index.module.css";
import ListCard from "./ListCard";

// import sImg3 from "../../assets/image/s-img2.png";


const HotelListCards = () => {
  return (
    <div className={styles.hotelListCards}>
      <div className={styles.headingTextHotelList}>
        Showing Luxury Properties
      </div>
      <div >
      {Array(5)
            .fill(0)
            .map((item) => {
              return <ListCard />;
            })}
      </div>
    </div>
  );
};

export default HotelListCards;
