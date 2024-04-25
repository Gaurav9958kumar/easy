import React from "react";
import styles from "./index.module.css";
import bImg from "../../assets/image/b-img.png";
import sImg1 from "../../assets/image/s-img.png";
import sImg2 from "../../assets/image/s-img1.png";
import viewAll from "../../assets/image/viewAll.png";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const ListCard = ({name,address1,id,airportcode,distancefromairport,rating,image}) => {

  const navigate=useNavigate()
  return (
    <div className={styles.listCard} style={{marginBottom:"20px"}}>
      <div>
        <div className={styles.bImage}>
          <img src={bImg} alt="" />
        </div>
        <div className={styles.sImages}>
          <img src={sImg1} alt="img" />
          <img src={sImg2} alt="img" />
          <img src={viewAll} alt="img" />
        </div>
      </div>
      <div className={styles.listDetails}>
        <h1 className={styles.villaName}>{name}</h1>
        <div className={styles.desc} style={{ marginBottom: "30px" }}>
          <span className={styles.descSpan}>{address1} |</span> {distancefromairport} Km From {airportcode} Airport <span className={styles.descSpan}>|</span>
          00.00 Km from {address1} Railway Station
        </div>
        <div className={styles.listOptions} style={{ marginBottom: "30px" }}>
          Book with no payment{" "}
        </div>
        <div className={styles.listOptions} style={{ marginBottom: "30px" }}>
          Free Cancellation
        </div>
        <div className={styles.listOptions} style={{ marginBottom: "30px" }}>
          Breakfast included
        </div>
        <div className={styles.bookBtn}>
        <Link to={`/hotel-details/${id}`}>  <button >View Details</button></Link>
        </div>
      </div>
      <div className={styles.listBorder}></div>
      <div className={styles.rating}>
        <div>
          {Array(5)
            .fill(0)
            .map((item) => {
              return <StarIcon />;
            })}
        </div>
        <div className={styles.price}>₹ 6,200/Night</div>
        <div className={styles.loginToBookText}>
          Login to Book Now & Pay later!
        </div>
      </div>
    </div>
  );
};

export default ListCard;
