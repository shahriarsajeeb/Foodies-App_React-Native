import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Linking,
  Share,
} from 'react-native';
import React, {useCallback} from 'react';
import {auth} from '../../../firebase';
const height = Dimensions.get('window').height;
const {width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

export default function Profile() {
  const LogoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        ToastAndroid.showWithGravity(
          'Logout Done Sucessfully!',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
      })
      .catch(error =>
        ToastAndroid.showWithGravity(
          error.message,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        ),
      );
  };

  const shareApp = async  () => {
    try {
      const result = await Share.share({
        message:
          'https://programmershahriarsajeeb.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          
        } else {
        
        }
      } else if (result.action === Share.dismissedAction) {
        
      }
    } catch (error) {
      alert(error.message);
    }
  }
 
  return (
    <View
      style={{
        width: width * 1,
        height: height * 1 - 50,
        backgroundColor: '#fff',
        padding: 10,
      }}>
      <View
        style={{
          marginTop: 20,
        }}>
        <Text
          style={{
            color: '#333',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: '600',
          }}>
          Your Email: {auth.currentUser?.email}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
       <TouchableOpacity
       style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={shareApp}
       >
       <Icon name="share-social-outline" size={25} color="#333" />
        <Text
          style={{
            color: '#333',
            fontSize: 18,
            paddingLeft: 10,
          }}>
          Reffer Your Friends
        </Text>
       </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="settings-outline" size={25} color="#333" />
        <Text
          style={{
            color: '#333',
            fontSize: 18,
            paddingLeft: 10,
          }}>
          Settings
        </Text>
      </View>

      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
         onPress={() => Linking.openURL("https://programmershahriarsajeeb.com/")}
          >
          <Icon name="mail-open-outline" size={25} color="#333" />
            <Text
              style={{
                color: '#333',
                fontSize: 18,
                paddingLeft: 10,
              }}
              >
              Developer Contact
            </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Icon name="log-out-outline" size={25} color="#333" />
        <TouchableOpacity onPress={LogoutHandler}>
          <Text
            style={{
              color: '#333',
              fontSize: 18,
              paddingLeft: 10,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
