import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
import LottieView from 'lottie-react-native';

export default function NetworkError() {
  return (
    <View
      style={{
        height: height * 1,
        width: width * 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <LottieView
        source={require('../../Assests/animations/12955-no-internet-connection-empty-state.json')}
        speed={0.5}
        autoPlay
        loop={true}
        style={{
            width: width * 1,
            height: height / 2.5,
        }}
      />
      <Text style={{
        color: 'crimson',
        fontSize:16,
        fontWeight:"600"
       }}>
        Please check your internet connection 😣
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
