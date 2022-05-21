import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Divider} from 'react-native-elements';
import LottieView from 'lottie-react-native';
const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;
import firebase from '../../firebase';

export default function CartScreen({navigation}) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {restaurantName, items} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const dispatch = useDispatch();

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

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

  const addOrderToFireBase = () => {
    setLoading(true);
    const db = firebase.firestore();
    db.collection('orders').add({
      items: items,
      restaurantName: restaurantName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('orderCompleted');
    }, 2500);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <>
        {items.length === 0 ? (
          <>
            <LottieView
              source={require('../Assests/animations/cat-empty.json')}
              loop
              autoPlay
              style={{
                height: width / 1,
                alignSelf: 'center',
                marginBottom: 30,
              }}
              speed={1}
            />
            <Text
              style={{
                color: '#333',
                textAlign: 'center',
                fontSize: 17,
              }}>
              Your cart is empty!
            </Text>
          </>
        ) : (
          <View
            style={{
              height: height * 1 - 70,
              justifyContent: 'space-between',
            }}>
            <View>
              {items.map((i, index) => (
                <View
                  style={{
                    paddingVertical: 8,
                    borderBottomWidth: 0.4,
                    borderBottomColor: 'rgb(55 55 55 / 66%)',
                  }}
                  key={index}>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingHorizontal: 15,
                      justifyContent: 'space-between',
                      width: width * 1,
                    }}>
                    <CartItemInfo
                      i={i}
                      cartItems={cartItems}
                      isFoodInCart={isFoodInCart}
                      selectedItem={selectedItem}
                    />
                    <CartImage i={i} />
                  </View>
                </View>
              ))}
              <View
                style={{
                  width: width * 1 - 10,
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    marginTop: 20,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    height: width / 5 - 20,
                    borderRadius: 30,
                    position: 'relative',
                    width: width / 2 + 20,
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    addOrderToFireBase();
                    setModal(false);
                  }}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                    }}>
                    Confirm Order
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <Divider width={0.8} orientation="horizontal" color="#999" />
              <CartTotal totalUSD={totalUSD} />
            </View>
          </View>
        )}
      </>
    </ScrollView>
  );
}

const CartItemInfo = ({i, cartItems, isFoodInCart, selectedItem}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
    }}>
    <BouncyCheckbox
      iconStyle={{borderColor: 'lightgray'}}
      fillColor="crimson"
      onPress={checkboxValue => selectedItem(i, checkboxValue)}
      isChecked={isFoodInCart(i, cartItems)}
    />
    <View
      style={{
        flexDirection: 'column',
        width: width / 2,
      }}>
      <Text
        style={{
          color: '#333',
          fontSize: 15,
        }}>
        {i.title}
      </Text>
      <Text
        style={{
          color: '#333',
          fontSize: 15,
          fontWeight: '600',
        }}>
        {i.price}
      </Text>
    </View>
  </View>
);

const CartImage = ({i}) => (
  <Image
    source={{uri: i.image}}
    style={{
      width: 100,
      height: 100,
      borderRadius: 8,
    }}
  />
);

const CartTotal = ({totalUSD}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    }}>
    <Text
      style={{
        color: '#333',
        fontSize: 16,
      }}>
      Total
    </Text>
    <Text
      style={{
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
      }}>
      ${totalUSD}
    </Text>
  </View>
);
