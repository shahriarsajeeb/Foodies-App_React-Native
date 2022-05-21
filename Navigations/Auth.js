import React, {useEffect, useState} from 'react';
import LoginScreen from '../src/Screens/LoginScreen';
import SignUpScreen from '../src/Screens/SignUpScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../src/Components/Auth/WelcomeScreen';
import {auth} from '../firebase';

const Auth = () => {
  
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default Auth;
