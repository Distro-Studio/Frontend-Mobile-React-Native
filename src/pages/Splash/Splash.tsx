import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {SplashLogo} from '../../assets/images';
import {webView} from '../../utils/WebView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}: any) => {
  async function getLoggedIn() {
    try {
      const value = await AsyncStorage.getItem('logged_in');
      if (value !== null) {
        setTimeout(() => {
          navigation.replace('MainApp');
        }, 3000);
      } else {
        setTimeout(() => {
          navigation.replace('SplashInfo1');
        });
      }
    } catch (e) {
      // saving error
    }
  }
  React.useEffect(() => {
    getLoggedIn();
  }, []);

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
