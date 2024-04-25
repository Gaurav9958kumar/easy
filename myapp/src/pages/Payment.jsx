import React, { useState } from 'react';
import styles from'./index.module.css'
import { Link } from 'react-router-dom';
import Navbar from '../components/dashboard/Navbar';
import ListNav from '../components/hotel-list/ListNav';
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom';
function Payment() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const navigate = useNavigate();
 
  

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Logic to validate payment details and process payment
    // Assuming payment is successful
    Swal.fire({
      icon: 'success',
      title: 'Payment Successful!',
      text: 'Your booking has been confirmed successfully.',
     
    }).then(() => {
      // After user closes the alert, route to the home page
      navigate('/hotel'); // Replace '/' with the path to your home page
    });
  };
  return (
    <div className={styles.payment_container}>
       <Navbar/>
     <ListNav/>
    <div className={styles.payment_form}>
    <h2>Enter Your Payment Details</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name on Card:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter your name here"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Card Number:</label>
        <input
  type="text"
  value={cardNumber}
  onChange={(e) => {
    const formattedValue = e.target.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedValue);
  }}
  placeholder="xxxx xxxx xxxx xxxx" // Placeholder for the format
  maxLength="19" // Maximum length of a formatted card number
  required
/>
      </div>
      <div>
        <label>Expiration Date:</label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YYYY"
          required
        />
      </div>
      <div>
        <label>CVV:</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          maxLength="3"
          required
          placeholder="xxx"
        />
      </div>
    <button type="submit">Pay</button> 
    </form>
    
  </div>
    </div>
    
  );
}

export default Payment;
