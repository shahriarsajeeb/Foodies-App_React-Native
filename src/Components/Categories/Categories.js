import {StyleSheet, Text, View, Image,ScrollView} from 'react-native';
import React from 'react';

const items = [
  {
    img: require('../../Assests/images/shopping-bag.png'),
    name: 'Pick-up',
    id: 1,
  },
  {
    img: require('../../Assests/images/bread.png'),
    name: 'Bakery Items',
    id: 2,
  },
  {
    img: require('../../Assests/images/fast-food.png'),
    name: 'Fast Foods',
    id: 3,
  },
  {
    img: require('../../Assests/images/deals.png'),
    name: 'Deals',
    id: 4,
  },
  {
    img: require('../../Assests/images/coffee.png'),
    name: 'Coffe & Tea',
    id: 5,
  },
  {
    img: require('../../Assests/images/desserts.png'),
    name: 'Desserts',
    id: 6,
  },
];

export default function Categories() {
  return (
    <View style={styles.main}>
      <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      >
        {items.map((i) => (
          <View style={styles.singleCtg}>
           <Image 
           source={i.img} 
           style={styles.ctgImg}
           key={i.id}
           />
           <Text
           style={{
             fontSize:15,
             fontWeight:"700",
             color:"#333"
           }}
           >
              {i.name}
           </Text>
           </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main:{
  backgroundColor:"#fff",
  marginVertical:10
  },
  ctgImg: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  singleCtg:{
    margin:10,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }
});
