import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import OrderItem from './OrderItem';
const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;
import firebase from '../../../firebase';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems,
  );

  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

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

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={styles.subtotalText}>${totalUSD}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
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
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modal}
        transparent={true}
        onRequestClose={() => setModal(false)}>
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 60,
            zIndex: 999,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: '#000',
                alignItems: 'center',
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
              onPress={() => setModal(true)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: '700',
                  marginRight: width / 6,
                }}>
                View Cart
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: '600',
                  paddingRight: 10,
                }}>
                ${totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {loading ? (
        <View
          style={{
            backgroundColor: '#000',
            position: 'absolute',
            opacity: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
            height: height * 1,
            width: width * 1,
          }}>
          <LottieView
            style={{
              height: height / 6,
            }}
            source={require('../../Assests/animations/scanner.json')}
            autoPlay
            speed={3}
          />
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(0,0,0,0.3)',
  },
  modalCheckoutContainer: {
    backgroundColor: '#fff',
    padding: 16,
    height: height / 1.7 - 5,
    elevation: 5,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
});
