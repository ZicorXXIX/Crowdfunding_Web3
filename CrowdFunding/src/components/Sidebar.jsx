import React, { Suspense, useState } from 'react'
import styles from './Sidebar.module.css'
import { navlinks } from '../constants'




export const Sidebar = () => {
  const [isActive, setIsActive] = useState("dashboard");

  function handleClick(name){
    console.log(name);
    setIsActive(name);
  }
  return (

    <div className={styles.mainDiv}>
      {
        navlinks.map(({imgUrl, name})=>(
          <div className={styles.iconDiv} style={{ "backgroundColor" : isActive && isActive === name && "#2c2f32"}}  onClick={()=>(handleClick(name))}>
            <img key={name} className={styles.icon} style={isActive !== name ? { filter: "grayscale(1)" } : {}} src={imgUrl} alt={name}></img>
          </div>
        ))
      }
        
    </div>
  )
}