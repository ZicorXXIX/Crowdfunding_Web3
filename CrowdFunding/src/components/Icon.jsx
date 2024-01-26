import React from 'react'
import styles from './Sidebar.module.css'
export const 
 Icon = (props) => {
  return (
    <div className={styles.icon}>
    
      <img src={props.imageUrl} alt="icon" />  
    </div>
  )
}