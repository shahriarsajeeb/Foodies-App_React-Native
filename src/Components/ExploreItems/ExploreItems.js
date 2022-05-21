import {Dimensions, Image, StyleSheet, Text, View,TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";
const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
import LottieView from "lottie-react-native";

export default function ExploreItems({navigation, restaurentData}) {
  return (
    <>
      {restaurentData.length === 0 ? (
        <View
        style={{
          height: height * 1,
          backgroundColor:"#fff"
        }}
        >
        <View
          style={{
            height: height * 0.8 - 50,
            alignItems: 'center',
            backgroundColor: '#fff',
            justifyContent: 'center',
          }}>
          <LottieView
            source={require('../../Assests/animations/97739-loader.json')}
            style={{
              height: height / 5 - 20,
              alignSelf: 'center',
              marginBottom: 30,
            }}
            autoPlay
            speed={1.5}
            loop
          />
        </View>
      </View>
      ) : (
        <View>
          <Text
            style={{
              color: '#333',
              fontSize: 18,
              paddingVertical: 10,
              textAlign: 'center',
              fontWeight: '600',
            }}>
            Popular Restaurants😍
          </Text>
          <View
          style={styles.mainRow}
          >
          {
              restaurentData.map((i,index) => (
                <View key={index}>
               <TouchableWithoutFeedback
               onPress={() => 
                navigation.navigate('Details', {
                    name: i.name,
                    image: i.image_url,
                    price: i.price,
                    reviews: i.review_count,
                    rating: i.rating,
                    categories: i.categories,
                  })
                }
               >
               <View style={styles.singleItem}>
                  <Image
                    source={{
                      uri: i.image_url,
                    }}
                    resizeMode="cover"
                    style={{
                      width: '100%',
                      height:height / 4 - 20,
                      borderTopLeftRadius:10,
                      borderTopRightRadius:10,
                      borderBottomLeftRadius:0,
                      borderBottomRightRadius:0,
                    }}
                  />
                  <View
                  style={{
                      flexDirection:"row",
                      justifyContent:"space-between",
                      alignItems:"center",
                      flexWrap:"wrap"
                  }}
                  >
                  <Text
                  style={{
                      color:"#333",
                      fontSize:16,
                      paddingVertical:5,
                      paddingLeft:5
                  }}
                  >
                      {i.name.length > 8 ? i.name.slice(0,7)+"..." : i.name}
                  </Text>
                    <View
                     style={{
                        flexDirection:"row",
                        alignItems:"center"
                    }}
                    >
                    <Icon name="star" size={18} color="#F7D42B" />
                  <Text
                  style={{
                      color:"#333",
                      fontSize:16,
                      paddingHorizontal:5
                  }}
                  >
                      ({i.review_count})
                  </Text>
                        </View>
                    </View>
                </View>
               </TouchableWithoutFeedback>
              </View>
              ))
          }
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  mainRow: {
    width: width * 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:"center"
  },
  singleItem: {
    width: width / 2 - 20,
    margin: 10,
    elevation: 8,
    borderRadius: 10,
    height: height / 4 + 30,
    backgroundColor: '#fff',
    overflow:"hidden"
  },
});
