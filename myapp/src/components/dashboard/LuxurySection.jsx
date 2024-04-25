import React from "react";
import styles from "./index.module.css";
import tripezyText from "../../assets/image/TripEzytext.png";
import villa1 from "../../assets/image/villa1.png";
import villa2 from "../../assets/image/villa2.png";
import villa3 from "../../assets/image/villa3.png";
import { useNavigate } from "react-router-dom";

const LuxurySection = () => {
  const navigate=useNavigate()
  return (
    <div className={styles.cards}>
      <div className={styles.tripezyTextContainer}>
        <img src={tripezyText} alt="text" className={styles.tripezyText} />
        <div className={styles.luxurySection}>L U X U R Y <span>SELECTIONS</span></div>
        <button className={styles.learnMoreBtn}>Learn more</button>
      </div>
      <div className={styles.villasCardContainer}>
        <div className={styles.villasCards}>
          <img src={villa1} alt="villas" className={styles.villasImage} />
          <div className={styles.villaDetails}>
            <div className={styles.villaName}>Luxury Properties</div>
            <div className={styles.villasDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni
              qui quam eos quaerat. Asperiores doloribus ipsum veniam iure, esse
              sunt obcaecati in omnis, velit facere, ut dolorem odit magnam.
            </div>
            <button className={styles.learnMoreBtn} onClick={()=>{navigate('/hotel')}}>Learn more</button>
          </div>
        </div>
        <div className={styles.villasCards}>
          <img src={villa2} alt="villas" className={styles.villasImage} />
          <div className={styles.villaDetails}>
            <div className={styles.villaName}>Luxury Villas</div>
            <div className={styles.villasDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni
              qui quam eos quaerat. Asperiores doloribus ipsum veniam iure, esse
              sunt obcaecati in omnis, velit facere, ut dolorem odit magnam.
            </div>
            <button className={styles.learnMoreBtn}>Learn more</button>
          </div>
        </div>
        <div className={styles.villasCards}>
          <img src={villa3} alt="villas" className={styles.villasImage} />
          <div className={styles.villaDetails}>
            <div className={styles.villaName}>Luxury Homestays</div>
            <div className={styles.villasDesc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni
              qui quam eos quaerat. Asperiores doloribus ipsum veniam iure, esse
              sunt obcaecati in omnis, velit facere, ut dolorem odit magnam.
            </div>
            <button className={styles.learnMoreBtn}>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxurySection;
