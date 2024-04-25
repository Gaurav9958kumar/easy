import React from "react";
import tripezyIcon from "../../assets/image/tripezyIcon.png";
import styles from "./index.module.css";
import Login from "../login/Login";
import OTP from "../OTP/OTP";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openOTP, setOpenOTP] = React.useState(false);
  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);
  const handleOTPOpen = () => setOpenOTP(true);
  const handleOTPClose = () => setOpenOTP(false);

  const navigate=useNavigate()


  return (
    <>
      <Login
        open={openLogin}
        handleOpen={handleLoginOpen}
        handleClose={handleLoginClose}
        handleOtpOpen={handleOTPOpen}
      />
      <OTP
        open={openOTP}
        handleOpen={handleOTPOpen}
        handleClose={handleOTPClose}
      />
      <div className={styles.dNavbar}>
        <img src={tripezyIcon} alt="icon" className={styles.tripezyIcon} />
        <div className={styles.navOptions}>
          <div className={styles.signIn} onClick={handleLoginOpen}>
            Sign in
          </div>
          <div className={styles.signUp} onClick={()=>{navigate('/hotel')}}>Sign up</div>
          <div className={styles.country}>IN</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
