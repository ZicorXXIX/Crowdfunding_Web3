import React, { useEffect, useState }  from 'react'
import styles from "./App.module.css";

import axios from "axios";
import Card from "./Card";

const Content = () => {
    const [campaignData, setCampaignData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:3000/")
        .then(function (response) {
          // handle success
          setCampaignData(response.data);
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, []);
  
    console.log(campaignData);
  return (
    <div className={styles.cards}>
        {campaignData.map((campaigns) => (
          <Card
            title={campaigns.campainTitle}
            img={campaigns.image}
            createdBy={campaigns._id}
            story={campaigns.story}
            endDate={campaigns.endDate}
            raised={campaigns.Raised}
          />
        ))}
      </div> 
  )
}

export default Content