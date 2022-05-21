import React, { useEffect, useState } from 'react'

const YELP_API_KEY =
  'AagOQtItLXjlikRyQemoteYaxOC2Cmrdhscqkne5lzJ6nfaMpmShmEzv8ePCfGovNmiM0p5U_LGSJyT-mU0EsEmI-Csu3vkogFRXzTV7z7UA73S1Ek6lb_3mP3CBYnYx';

export default function Fetch() {
    const [restaurentData, setRestaurentData] = useState('');
    const [city, setCity] = useState('Hollywood');
    const getRestaurentFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        };
        return fetch(yelpUrl, apiOptions)
          .then(res => res.json())
          .then(json =>
            setRestaurentData(
              json.businesses.filter(business =>
                business.transactions.includes(activeTab.toLowerCase()),
              ),
            ),
          );
      };
      useEffect(() => {
        getRestaurentFromYelp();
      }, [city, activeTab]);

  return (
    <Fetch 
    restaurentData={restaurentData}
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    setCity={setCity}
    city={city}
    />
  )
}

