import React from "react";
import styles from "./index.module.css";
import InputSearchField from "../UI-components/InputSearchField";
const ListNav = () => {
  return (
    <div className={styles.hotelListNavContainer}>
      <InputSearchField placeholder="City, Area or Property" />
      <InputSearchField placeholder="Check In Date" />

      <InputSearchField placeholder="Check Out Date" />

      <InputSearchField placeholder="Rooms & Guests" />
      <button>Search</button>
    </div>
  );
};

export default ListNav;
