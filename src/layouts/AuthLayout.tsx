import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ChevronLeft,
  IconHelp,
  SplashLogo,
  SplashVerification,
} from '../assets/images';
import {webView, webViewImageCenter} from '../utils/WebView';
import {getResponsive} from '../utils';

const {width, height} = Dimensions.get('window');

let webViewInstance = webView;
webViewInstance = {
  backgroundColor: '#fffcfa',
  width: '100%',
};

const AuthLayout = ({children, headerText, type}: any) => {
  const styles = StyleSheet.create({
    webView,
    webViewInstance,
    webViewImageCenter,
    screen_container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      position: 'relative',
    },
    get_help: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 8,
      backgroundColor: '#E7F6F6',
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 162,
      marginLeft: 'auto',
    },
    get_help_text: {
      fontSize: 14,
      color: '#10A9A5',
      fontWeight: '500',
    },
    screen_header: {
      width,
      height:
        type === 'NewPassword'
          ? getResponsive(453, 'height')
          : getResponsive(453, 'height'),
      backgroundColor: '#fffcfa',
      padding: 24,
    },
    child_container_height: {
      height: getResponsive(391, 'height'),
      backgroundColor: '#FFFFFF',
    },
    screen_header_image_container: {
      flex: 1,
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
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View
        style={
          Platform.OS === 'web' ? styles.webView : styles.screen_container
        }>
        {!headerText && (
          <View
            style={
              Platform.OS === 'web'
                ? styles.webViewInstance
                : styles.screen_header
            }>
            <View style={styles.get_help}>
              <Image source={IconHelp} />
              <Text style={styles.get_help_text}>Butuh Bantuan?</Text>
            </View>
            <View style={styles.screen_header_image_container}>
              {type !== 'NewPassword' && (
                <Image
                  source={
                    type === 'verification' ? SplashVerification : SplashLogo
                  }
                  style={
                    Platform.OS === 'web'
                      ? styles.webViewImageCenter
                      : styles.image_screen
                  }
                />
              )}
            </View>
          </View>
        )}
        {/* {headerText && (
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
        )} */}
        <View style={styles.child_container_height}>{children}</View>
      </View>
    </ScrollView>
  );
};

export default AuthLayout;
