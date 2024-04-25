import React from "react";
import styles from "./index.module.css";
const InputField = (
  { placeholder, resendOtp = false },
  handleResendOtp = null
) => {
  return (
    <div className={styles.inputContainer}>
      <span>{placeholder}</span> <input type="text" />{" "}
      {resendOtp && (
        <span
          className={styles.resendOtp}
          onClick={handleResendOtp ? handleResendOtp : () => {}}
        >
          Resend OTP
        </span>
      )}
    </div>
  );
};

export default InputField;
