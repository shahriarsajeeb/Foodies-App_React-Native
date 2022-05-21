import {View, Text, ScrollView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../Components/Layout/Header';
import Search from '../Components/Layout/Search';
import RestaurantItem from '../Components/RestaurentItems/RestaurantItem';
const HEIGHT = Dimensions.get('window').height;

const YELP_API_KEY =
  'AagOQtItLXjlikRyQemoteYaxOC2Cmrdhscqkne5lzJ6nfaMpmShmEzv8ePCfGovNmiM0p5U_LGSJyT-mU0EsEmI-Csu3vkogFRXzTV7z7UA73S1Ek6lb_3mP3CBYnYx';

const HomeScreen = ({navigation}) => {
  const [restaurentData, setRestaurentData] = useState('');
  const [city, setCity] = useState('Hollywood');
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
  }, [city,activeTab]);
  
  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          height: HEIGHT * 1,
        }}>
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <Search cityHandler={setCity} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <Categories /> */}
          <RestaurantItem
            restaurentData={restaurentData}
            navigation={navigation}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
