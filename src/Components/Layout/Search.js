import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const {width} = Dimensions.get('window');

export default function Search({cityHandler}) {
  const [data, setData] = useState('');
  const searchLocation = () => {
    cityHandler(data);
  };
  
  return (
    <View style={styles.searchMain}>
      <View
        style={{
          position: 'relative',
          marginHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#eee',
          width: width * 1 - 20,
          paddingHorizontal: 10,
          borderRadius: 30,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="location" size={30} color="#333" />
          <TextInput
            placeholder="Search your location..."
            placeholderTextColor="#333"
            style={{
              fontSize: 15,
              color: '#333',
            }}
            textContentType="location"
            value={data}
            onChangeText={setData}
            onSubmitEditing={searchLocation}
          />
        </View>
        <View>
          <TouchableOpacity onPress={searchLocation}>
            <Icon name="search" size={25} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchMain: {
    width: width * 1,
    height: 65,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
