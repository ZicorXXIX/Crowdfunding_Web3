import React from "react";
import styles from "./Card.module.css";
import { thirdweb } from "../assets";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFolder} from "@fortawesome/free-regular-svg-icons";

function Card({title, img, createdBy, story, endDate, raised}) {      
    
    console.log(title)

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={img}></img>
      <div className={styles.description}>

        <div className={styles.category}>
            <FontAwesomeIcon icon={faFolder}  /><p>Education</p>
        </div>
        <h3>{title}</h3>
        <p>{story.slice(0,30)+"...."}</p>

        <div className={styles.raisedMoney}>
          <div>
            <h4>{raised}</h4>
            <p>Raised of</p>
          </div>
          <div>
            <h4>{endDate}</h4>
            <p>Days to go</p>
          </div>
        </div>
        <div className={styles.userId}>
          <img className={styles.profileImg} src={thirdweb} alt="" />
          <p>{createdBy}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
