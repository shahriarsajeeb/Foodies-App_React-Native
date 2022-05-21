import {Dimensions, StyleSheet, Text, View,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItem from '../Components/RestaurentItems/Menuitem';
import firebase from '../../firebase';

const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');

export default function OrderComplete() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
  });
  const {restaurantName,items} = useSelector(
    state => state.cartReducer.selectedItems,
  );
  useEffect(() => {
    const db = firebase.firestore();
    const orderItems = db
      .collection('orders')
      .orderBy('createdAt','desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => orderItems();
  }, []);
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
    <View style={styles.main}>
      <LottieView
        style={{height: 100, alignSelf: 'center', marginBottom: 30}}
        source={require('../Assests/animations/check-mark.json')}
        autoPlay
        speed={0.5}
        loop={false}
      />
      <Text
        style={{
          color: '#333',
          fontSize: 17,
          fontWeight: '600',
          marginBottom: 20,
          textAlign:"left"
        }}>
        Your Order at {restaurantName} has been placed...
      </Text>
     <MenuItem foods={lastOrder.items} hideCheckBox={true} />
     <LottieView
        style={{
          height: height / 3,
          alignItems: 'center',
          justifyContent: "flex-end",
          width: width * 1,
        }}
        source={require('../Assests/animations/cooking.json')}
        autoPlay
        speeed={0.5}
      />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    backgroundColor: '#fff',
    width: width * 1,
    paddingVertical: 20,
    paddingHorizontal:5,
    alignItems: 'center',
  },
});
