import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');

export default function WelcomeScreen({navigation}) {
  return (
    <View
      style={{
        height: height * 1,
        width: width * 1,
        backgroundColor: '#1E1F20',
      }}>
      <StatusBar barStyle="light-content" />
      <Header />
      <Details />
      <BottomButton navigation={navigation} />
    </View>
  );
}

const Header = () => {
  return (
    <View
      style={{
        height: height / 1.6,
      }}>
      <ImageBackground
        source={require('../../Assests/images/welcome1.jpg')}
        style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}
        resizeMode="cover">
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          colors={['transparent', '#1E1F20']}
          style={{
            height: height / 5 + 20,
            justifyContent: 'flex-end',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              width: width / 1.2,
              color: '#f5f5f5',
              fontSize: 26,
              fontWeight: '600',
              lineHeight: 45,
              paddingHorizontal: 10,
            }}>
            Find your favourite Foods and get it from Your Home😍
          </Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

const Details = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 10,
      }}>
      <Text
        style={{
          marginTop: 10,
          width: width / 1.1,
          color: 'gray',
          fontSize: 17,
          paddingHorizontal: 10,
          lineHeight: 20,
        }}>
        Discover more than 1200 foods recipes and all of your favourite
        restaurants in your hands!
      </Text>
    </View>
  );
};

const BottomButton = ({navigation}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: height / 8 - 50,
    }}>
    <TouchableOpacity style={styles.button}
    onPress={() => navigation.navigate("Login")}
    >
      <Text
        style={{
          fontSize: 17,
          color: '#fff',
          fontWeight: '600',
        }}>
        Login
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.button,{
        backgroundColor: "transparent",
        borderWidth:2,
        borderColor:"#0E9275"
    }]}
    onPress={() => navigation.navigate("Signup")}
    >
      <Text
        style={{
          fontSize: 17,
          color: '#fff',
          fontWeight: '600',
        }}>
        Sign Up
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  button: {
    width: width / 1.4,
    backgroundColor: '#0E9275',
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginVertical:10,
  },
});
