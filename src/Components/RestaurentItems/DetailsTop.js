import {StyleSheet, Text, View, Image, ScrollView,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon  from 'react-native-vector-icons/Ionicons';

const yelpRestaurantInfo = {
  name: 'Farmhouse Kitchen Thai Cuisine',
  image:
    'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80',
  price: '$$',
  reviews: '1500',
  rating: 5,
  categories: [{title: 'Thai'}, {title: 'Comfort Food'}],
};

export default function DetailsTop({data,navigation}) {
  const {name, image, price, rating, reviews, categories} = data;

  const formattedCategories = categories.map(i => i.title).join(' • ');

  const description = `${formattedCategories ? formattedCategories : ''} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} navigation={navigation} />
      <RestaurantTitle text={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = props => (
  <View>
    <Image
      source={{uri: props.image}}
      style={{
        width: '100%',
        height: 180,
        position:"relative",
      }}
    />
   <TouchableOpacity
   onPress={() => props.navigation.goBack()}
   style={{
    position:"absolute",
    top:10,
    left:10,
  }}
   >
   <Icon name="arrow-back-outline" size={30} color="#fff" />
   </TouchableOpacity>
  </View>
);

const RestaurantTitle = props => (
  <View>
    <Text
      style={{
        fontSize: 25,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15,
        color: '#333',
      }}>
      {props.text}
    </Text>
  </View>
);

const RestaurantDescription = props => (
  <View>
    <Text
      style={{
        fontSize: 15.5,
        fontWeight: '400',
        marginTop: 10,
        marginHorizontal: 15,
        color: '#555',
      }}>
      {props.description}
    </Text>
  </View>
);

const styles = StyleSheet.create({});
