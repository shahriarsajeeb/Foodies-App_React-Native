import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const {width} = Dimensions.get('window');

export default function BottomTabs() {
  return (
    <View style={styles.BottomMain}>
      <IconBottom icon="home" text="Home" />
      <IconBottom icon="search" text="Search" />
      <IconBottom icon="cart" text="Grocery" />
      <IconBottom icon="receipt" text="Orders" />
      <IconBottom icon="person-circle" text="Account" />
    </View>
  );
}

const IconBottom = (props) => {
  return (
    <View>
    <TouchableOpacity>
      <Icon
        name={props.icon}
        size={25}
        style={{
          marginBottom: 3,
          alignSelf: 'center',
          color: '#333',
        }}
      />
      <Text>{props.text}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  BottomMain: {
    width: width * 1,
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop:5
  },
});
