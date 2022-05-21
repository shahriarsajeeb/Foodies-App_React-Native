import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/Screens/HomeScreen';
import DetailsScreen from '../src/Screens/DetailsScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from "../src/Screens/CartScreen";
import { useSelector } from 'react-redux';
import UserScreen from '../src/Screens/UserScreen';
import OfferScreen from "../src/Screens/OfferScreen";
import ExploreScreen from "../src/Screens/ExploreScreen";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const {items} = useSelector(
        state => state.cartReducer.selectedItems,
      );
  return (
    <Tab.Navigator
      initialRouteName="Home3"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={StackScreen}
        options={({route}) => ({
          tabBarStyle: {display: hiddenTab(route)},
          tabBarIcon: ({focused}) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../src/Assests/Tabs/home.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  marginTop: 5,
                  tintColor: focused ? 'crimson' : 'black',
                }}
              />
              <Text style={{color: focused ? 'crimson' : 'black'}}>Home</Text>
            </View>
          ),
        })}
      />
      <Tab.Screen name="Cart" component={CartScreen}
       options={({route}) => ({
        tabBarStyle: {display: hiddenTab(route)},
        tabBarBadge: items.length,
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/Assests/Tabs/cart.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 5,
                tintColor: focused ? 'crimson' : 'black',
              }}
            />
            <Text style={{color: focused ? 'crimson' : 'black'}}>Cart</Text>
          </View>
        ),
      })}
      />
      <Tab.Screen name="Grocery" component={ExploreScreen}
       options={({route}) => ({
        tabBarStyle: {display: hiddenTab(route)},
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/Assests/Tabs/shop.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 5,
                tintColor: focused ? 'crimson' : 'black',
              }}
            />
            <Text style={{color: focused ? 'crimson' : 'black'}}>Explore</Text>
          </View>
        ),
      })}
      />
      <Tab.Screen name="Shop" component={OfferScreen}
       options={({route}) => ({
        tabBarStyle: {display: hiddenTab(route)},
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/Assests/Tabs/explore.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 5,
                opacity:.9,
                tintColor: focused ? 'crimson' : 'black',
              }}
            />
            <Text style={{color: focused ? 'crimson' : 'black'}}>Offers</Text>
          </View>
        ),
      })}
      />
      <Tab.Screen name="Account" component={UserScreen}
       options={({route}) => ({
        tabBarStyle: {display: hiddenTab(route)},
        tabBarIcon: ({focused}) => (
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../src/Assests/Tabs/account.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
                marginTop: 5,
                tintColor: focused ? 'crimson' : 'black',
              }}
            />
            <Text style={{color: focused ? 'crimson' : 'black'}}>Profile</Text>
          </View>
        ),
      })}
      />
    </Tab.Navigator>
  );
};

export default Tabs;


const StackScreen = () => {
    const Stack = createNativeStackNavigator();
 return(
  <Stack.Navigator
  screenOptions={{
    headerShown:false
  }}
  initialRouteName="Home2"
  >
    <Stack.Screen name='Home2' component={HomeScreen} />
    <Stack.Screen name='Details' component={DetailsScreen} />
  </Stack.Navigator>
 )
}


const hiddenTab = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  if (routeName === 'Details') {
    return 'none';
  }
  if (routeName === 'Home') {
    return 'flex';
  }
};
