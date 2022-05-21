import React, {useEffect, useState} from 'react';
import Main from './Navigations/Main';
const store = configureStore();
import configureStore from './redux/Store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './Navigations/Auth';
import Loader from './src/Components/Layout/Loader';
import {auth} from './firebase';
import NetInfo from '@react-native-community/netinfo';
import NetworkError from './src/Components/Layout/NetworkError.js';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
}

const AppStack = () => {
  const [netInfo, setNetInfo] = useState('');
  const [notConnected, setNotConnected] = useState(false);
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Loading effect
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Check user Login or not
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });

    // Network connection check
    const data = NetInfo.addEventListener(state => {
      setNetInfo(
        `connectionType:${state.type} IsConnected?: ${state.isConnected}`,
      );
      if (state.isConnected === true) {
        setNotConnected(false);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2500);
      } else {
        setNotConnected(true);
      }
    });

    return unsubscribe, data;
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          {!notConnected ? (
            <>
              {login ? (
                <NavigationContainer>
                  <Main />
                </NavigationContainer>
              ) : (
                <NavigationContainer>
                  <Auth />
                </NavigationContainer>
              )}
            </>
          ) : (
            <NetworkError />
          )}
        </>
      )}
    </>
  );
};
