import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "./index.module.css";
import tripezyIcon from "../../assets/image/tripezyIcon.png";
import BackBtn from "../../assets/svg/backBtn.svg";
import InputField from "../UI-components/InputField";
import { Link, useHistory } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 24,
  minWidth: "600px",
  p: 4,
  borderRadius: "25px",
};

export default function OTP({ handleOpen, handleClose, open }) {
  
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.OTPForm}>
            <div className={styles.header}>
              <img src={BackBtn} alt="" className={styles.backBtn} />
              <img
                src={tripezyIcon}
                alt="icon"
                className={styles.loginTripezyIcon}
              />
              <div></div>
            </div>
            <div className={styles.textContainer}>
              <div
                className={styles.verifyText}
                style={{ marginBottom: "16px" }}
              >
                Verify your mobile number
              </div>
              <div className={styles.otpSent} style={{ marginBottom: "35px" }}>
                OTP has been sent to mobile
              </div>
              <div className={styles.otp} style={{ marginBottom: "35px" }}>
                OTP
              </div>
              <div style={{ marginBottom: "70px" }}>
                <input
                  resendOtp={true}
                  placeholder="Enter Here"
                  style={{
                    width: "100%",
                    height: "35px",
                    border: "2px solid #07ADAB",
                    borderRadius: "10px",
                    paddingLeft: "10px",
                    fontSize: "18px",
                  }}
                />
              </div>
              <Link to="/hotel-list" style={{textDecoration:"none"}}>
                <button
                  className={styles.continueBtn}
                  // style={{ background: "#E8E8E8", color: "#AEACAC" }}
                  // onClick={handleContinue}
                >
                  CONTINUE
                </button>
              </Link>

              <div className={styles.loginTextAndBorderContainer}>
                <div className={styles.loginBorder}></div>
                <div className={styles.loginText}>Or Login via Password</div>
                <div className={styles.loginBorder}></div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
