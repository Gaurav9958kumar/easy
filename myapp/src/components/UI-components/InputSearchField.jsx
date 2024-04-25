import React from 'react'
import styles from './index.module.css'
const InputSearchField = ({placeholder}) => {
  return (
    <div className={styles.inputSearchField}>
        <input type="text"  placeholder={placeholder} />
    </div>
  )
}

export default InputSearchField