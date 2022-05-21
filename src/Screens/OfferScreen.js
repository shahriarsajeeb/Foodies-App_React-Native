import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
const {width} = Dimensions.get('window');
const height = Dimensions.get('window').height;

export default function OfferScreen() {
  return (
    <View
    style={{
        width: width * 1,
        height: height * 1,
        alignItems:"center"
    }}
    >
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
                color:"#333",
                fontSize:15,
                fontWeight:"600"
            }}
            >
                Sorry you not have any offer right now!😣
            </Text>
    </View>
  )
}

const styles = StyleSheet.create({})