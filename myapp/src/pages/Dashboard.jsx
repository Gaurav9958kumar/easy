import React from 'react'
import Navbar from '../components/dashboard/Navbar'
import MidSection from '../components/dashboard/MidSection'
import styles from './index.module.css'
const Dashboard = () => {
  return (
    <div className={styles.dash_main_container}>
        <Navbar/>
        <MidSection/>
    </div>
  )
}

export default Dashboard