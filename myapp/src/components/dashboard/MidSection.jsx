import React from "react";
import styles from "./index.module.css";
import LuxurySection from "./LuxurySection";
const MidSection = () => {
  return (
    <div className={styles.dashboardContainer} >
      <div className={styles.backgroundImage}></div>
      <div className={styles.LuxurySectionContainer}>
        <LuxurySection/>
      </div>
    </div>
  );
};

export default MidSection;