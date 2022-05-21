import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './Tabs';
import OrderComplete from '../src/Screens/OrderComplete';

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="orderCompleted" component={OrderComplete} />
    </Stack.Navigator>
  );
};

export default Main;
