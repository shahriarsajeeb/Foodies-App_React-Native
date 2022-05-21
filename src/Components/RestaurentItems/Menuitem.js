import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React, {useState} from 'react';
import {Divider} from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch, useSelector} from 'react-redux';
const {width} = Dimensions.get('window');

export default function Menuitem({restaurantName, foods, hideCheckBox}) {
  const dispatch = useDispatch();

  const selectedItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find(item => item.title === food.title));

  return (
    <>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItem}>
            {hideCheckBox ? null : (
              <BouncyCheckbox
                iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
                fillColor="green"
                onPress={checkboxValue => selectedItem(food, checkboxValue)}
                isChecked={isFoodInCart(food, cartItems)}
              />
            )}
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.8} orientation="vertical" />
        </View>
      ))}
    </>
  );
}

const FoodInfo = props => {
  return (
    <View style={{width: width / 2, justifyContent: 'space-evenly'}}>
      <Text style={[styles.normalText, {fontWeight: '700'}]}>
        {props.food.title}
      </Text>
      <Text style={styles.normalText}>{props.food.description}</Text>
      <Text style={styles.normalText}>{props.food.price}</Text>
    </View>
  );
};

const FoodImage = props => (
  <View>
    <Image
      source={{uri: props.food.image}}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 15,
    width: width * 1,
  },
  normalText: {
    color: '#333',
    fontSize: 16,
  },
});
