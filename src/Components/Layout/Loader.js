import { Dimensions, View } from 'react-native'
import React from 'react'
import LottieView from "lottie-react-native";

const height = Dimensions.get("window").height;
const {width} = Dimensions.get("window");

export default function Loader() {
  return (
    <View
    style={{
        height: height * 1,
        width: width * 1,
        backgroundColor:"#fff",
        justifyContent:"center",
        alignItems:"center",
    }}
    >
      <LottieView 
        source={require("../../Assests/animations/30754-food-delivery-services-animation.json")}
        speed={.5}
        autoPlay
        loop={true}
      />
    </View>
  )
}
