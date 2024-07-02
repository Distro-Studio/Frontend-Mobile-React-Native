import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SplashLogo} from '../../assets/images';
import {webView} from '../../utils/WebView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector} from '../../redux';

const Splash = ({navigation}: any) => {
  const authState = useAppSelector(state => state.auth.authState);
  console.log('splash: ', authState);
  async function getLoggedIn(state) {
    try {
      if (Object.keys(state).length > 0) {
        setTimeout(() => {
          navigation.replace('MainApp');
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.push('SplashInfo1');
        });
      }
    } catch (e) {
      // saving error
    }
  }
  React.useEffect(() => {
    getLoggedIn(authState);
  }, [authState]);

  return (
    <View style={Platform.OS === 'web' ? styles.webView : styles.container}>
      <Image source={SplashLogo} style={styles.splash_logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  webView,
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  splash_logo: {width: 163, height: 163},
});

export default Splash;
