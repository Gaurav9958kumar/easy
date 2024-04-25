import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import loginImage from "../../assets/image/loginImage.png";
import styles from "./index.module.css";
import tripezyIcon from "../../assets/image/tripezyIcon.png";
import InputField from "../UI-components/InputField";
import GoogleIcon from "../../assets/svg/google.svg";
import EmailIcon from "../../assets/svg/email.svg";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "none",
  p: 4,
  outline:0,
  // border:"1px solid red"
};


export default function Login({ handleOpen, handleClose, open,handleOtpOpen }) {

    const handleContinue=()=>{
        handleClose()
        handleOtpOpen()
    }

    // const InputField = ({ placeholder }) => {
    //   return <input type="text" placeholder={placeholder} />;
    // };
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
          <div className={styles.loginContainer}>
            <div className={styles.loginImageContainer}>
              <img
                src={loginImage}
                alt="loginImg"
                className={styles.loginImage}
              />
            </div>
            <div className={styles.loginForm}>
              <div style={{ marginBottom: "40px" }}>
                <img
                  src={tripezyIcon}
                  alt="icon"
                  className={styles.loginTripezyIcon}
                />
              </div>
              <div style={{ marginBottom: "30px" }}>
                <input placeholder="First Name:" style={{ width:'100%', height:'35px',border:'2px solid #07ADAB',borderRadius:'10px', paddingLeft:"10px",  fontSize:'18px'}}/>
              </div>
              <div style={{ marginBottom: "30px" }}>
              <input placeholder="Last Name:" style={{ width:'100%', height:'35px',border:'2px solid #07ADAB',borderRadius:'10px', paddingLeft:"10px",  fontSize:'18px'}}/>
              </div>
              <div style={{ marginBottom: "30px" }}>
              <input type="email" placeholder="Email:" style={{ width:'100%', height:'35px',border:'2px solid #07ADAB',borderRadius:'10px', paddingLeft:"10px",  fontSize:'18px'}}/>
              </div>
              <div style={{ marginBottom: "30px" }}>
               <input  type="" placeholder="Mobile Number:" style={{ width:'100%', height:'35px',border:'2px solid #07ADAB',borderRadius:'10px', paddingLeft:"10px",  fontSize:'18px'}}/>
              </div>

             
             <button 
                className={styles.continueBtn}
                // style={{ background: "#E8E8E8", color: "#AEACAC" }}
                onClick={handleContinue}

              >
                CONTINUE
              </button>
            
              <div className={styles.loginTextAndBorderContainer}>
                <div className={styles.loginBorder}></div>
                <div className={styles.loginText}>Or Login/Signup with</div>
                <div className={styles.loginBorder}></div>
              </div>
              <div className={styles.iconContainer}>
                <div className={styles.GoogleIconBorder}>
                  <img src={GoogleIcon} alt="" />
                </div>

                <div className={styles.IconBorder}>
                  <img src={EmailIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
