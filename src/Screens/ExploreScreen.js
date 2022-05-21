import {Dimensions, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ExploreItems from '../Components/ExploreItems/ExploreItems';

const height = Dimensions.get('window').height;
const {width} = Dimensions.get("window");
const YELP_API_KEY =
  'AagOQtItLXjlikRyQemoteYaxOC2Cmrdhscqkne5lzJ6nfaMpmShmEzv8ePCfGovNmiM0p5U_LGSJyT-mU0EsEmI-Csu3vkogFRXzTV7z7UA73S1Ek6lb_3mP3CBYnYx';

export default function ExploreScreen({navigation}) {
  const [restaurentData, setRestaurentData] = useState('');
  const [city, setCity] = useState('Los Angeles');
  const [activeTab, setActiveTab] = useState('Delivery');
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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: height * 1,
        width: width * 1,
        backgroundColor:"#e5e5e5"
      }}>
      <ExploreItems navigation={navigation} restaurentData={restaurentData} />
    </ScrollView>
  );
}
