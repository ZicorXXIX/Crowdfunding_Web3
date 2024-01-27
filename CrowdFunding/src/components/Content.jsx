import React, { useEffect, useState } from 'react'
import styles from "./App.module.css";

import axios from "axios";
import Card from "./Card";
import Navbar from './Navbar';

const Content = () => {
    const [campaignData, setCampaignData] = useState([]);

    const handleChange = async (e) => {
        console.log(e.target.value)
        if (e.target.value == "") {
            const response = await axios.get("http://localhost:3000/")
            setCampaignData(response.data);
            return
        } else {

            const response = await axios.get(`http://localhost:3000/search/${e.target.value}`)
            if (response.data == "") {

                return
            }
            setCampaignData(response.data);

            console.log(campaignData)
        }

    }

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
    return (<>
        <Navbar handleChange={handleChange} />
        {campaignData?.length == 0 ? <h1 className={styles.noData}>No Data Found</h1> : <div className={styles.cards}>
            {campaignData?.map((campaigns) => (
                <Card
                    key={campaigns._id}
                    title={campaigns.campainTitle}
                    img={campaigns.image}
                    createdBy={campaigns._id}
                    story={campaigns.story}
                    endDate={campaigns.endDate}
                    raised={campaigns.Raised}
                />
            ))}
        </div>}

    </>
    )
}

export default Content