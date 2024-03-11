import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ChevronLeft, SplashLogo} from '../assets/images';
import {webView, webViewImageCenter} from '../utils/WebView';

const AuthLayout = ({children, headerText, navigation}: any) => {
  return (
    <View
      style={Platform.OS === 'web' ? styles.webView : styles.screen_container}>
      {!headerText && (
        <View
          style={
            Platform.OS === 'web'
              ? styles.webViewInstance
              : styles.screen_header
          }>
          <Image
            source={SplashLogo}
            style={
              Platform.OS === 'web'
                ? styles.webViewImageCenter
                : styles.image_screen
            }
          />
        </View>
      )}
      {headerText && (
        <View
          style={
            Platform.OS === 'web'
              ? styles.webViewInstance
              : styles.screen_header_container
          }>
          <Pressable onPress={() => navigation.navigate('LoginScreen')}>
            <Image source={ChevronLeft} />
          </Pressable>
          <View style={styles.screen_header_activation}>
            <Image
              source={SplashLogo}
              style={
                Platform.OS === 'web'
                  ? styles.webViewImageCenter
                  : styles.image_screen
              }
            />
            <View style={styles.screen_header_info}>
              <Text style={styles.screen_header_info_title}>
                Activate Your Account
              </Text>
              <Text style={styles.screen_header_info_text}>
                Please make sure you have been invited by your company to
                activate your accountasd
              </Text>
            </View>
          </View>
        </View>
      )}
      {children}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

let webViewInstance = webView;
webViewInstance = {
  backgroundColor: '#fffcfa',
  width: '100%',
};

const styles = StyleSheet.create({
  webView,
  webViewInstance,
  webViewImageCenter,
  screen_container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screen_header: {
    width,
    height: height * 0.45,
    backgroundColor: '#fffcfa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen_header_activation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_screen: {
    width: 163,
    height: 163,
  },
  // with header text
  screen_header_container: {
    width,
    height: height * 0.49,
    backgroundColor: '#fffcfa',
    padding: 24,
  },
  screen_header_info: {
    marginTop: 24,
  },
  screen_header_info_title: {
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  screen_header_info_text: {
    fontSize: 14,
    fontFamily: 'Inter',
    color: '#6B6D79',
    textAlign: 'center',
  },
});

export default AuthLayout;
