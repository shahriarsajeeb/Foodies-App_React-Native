import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from 'lottie-react-native';

const HEIGHT = Dimensions.get('window').height;

export default function RestaurantItem({navigation, ...props}) {
  return (
    <>
      {props.restaurentData.length === 0 ? (
        <>
          <View
            style={{
              height: HEIGHT * 0.8 - 50,
              alignItems: 'center',
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
            <LottieView
              source={require('../../Assests/animations/97739-loader.json')}
              style={{
                height: HEIGHT / 5 - 20,
                alignSelf: 'center',
                marginBottom: 30,
              }}
              autoPlay
              speed={1.5}
              loop
            />
          </View>
        </>
      ) : (
        <View
          style={{
            marginBottom: HEIGHT / 7 - 60,
            backgroundColor: '#e5e5e5',
          }}>
          {props.restaurentData.map((i, index) => (
            <View key={index}>
              <RestaurantImage
                image={i.image_url}
                name={i.name}
                time={i.delivery_time}
                price={i.price}
                rating={i.rating}
                reviews={i.review_count}
                navigation={navigation}
                categories={i.categories}
              />
            </View>
          ))}
        </View>
      )}
    </>
  );
}

const RestaurantImage = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate('Details', {
          name: props.name,
          image: props.image,
          price: props.price,
          reviews: props.reviews,
          rating: props.rating,
          categories: props.categories,
        })
      }>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#fff',
          padding: 15,
          marginBottom: 10,
        }}
        key={props.key}>
        <Image
          source={{
            uri: props.image,
          }}
          style={{
            width: '100%',
            height: 180,
            position: 'relative',
          }}
          key={props.index}
        />
        <RestaurantInfo
          name={props.name}
          time={props.time}
          rating={props.rating}
          reviews={props.reviews}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const RestaurantInfo = props => {
  return (
    <View style={styles.mainBox}>
      <View>
        <Text
          style={[
            styles.normal,
            {
              fontWeight: '700',
              fontSize: 18,
            },
          ]}>
          {props.name}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text
            style={[
              styles.normal,
              {
                fontWeight: '700',
              },
            ]}>
            30-45 • min
          </Text>
          <Text
            style={[
              styles.normal,
              {
                marginLeft: 10,
                color: '#333',
                fontWeight: '700',
              },
            ]}>
            {' '}
            • $${' '}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              color: '#333',
              fontSize: 16,
              fontWeight: '700',
              marginRight: 5,
            }}>
            •
          </Text>
          <Icon name="star" size={18} color="#F7D42B" />
          <Text
            style={[
              styles.normal,
              {
                marginLeft: 5,
              },
            ]}>
            {props.rating}
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 16,
              marginLeft: 10,
              fontWeight: '600',
            }}>
            ({props.reviews}+)
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  normal: {
    fontSize: 16,
    color: '#333',
  },
});
