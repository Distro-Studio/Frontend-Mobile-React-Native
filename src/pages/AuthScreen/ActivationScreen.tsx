import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import {ChevronLeft, SplashLogo} from '../../assets/images';

const ActivationScreen = () => {
  return (
    <View style={styles.screen_container}>
      <View style={styles.screen_header_container}>
        <Image source={ChevronLeft} />
        <View style={styles.screen_header}>
          <Image source={SplashLogo} style={styles.image_screen} />
          <View style={styles.screen_header_info}>
            <Text style={styles.screen_header_info_title}>
              Activate Your Account
            </Text>
            <Text style={styles.screen_header_info_text}>
              Please make sure you have been invited by your company to activate
              your account
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.form_container}>
        <Text>asd</Text>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  screen_header_container: {
    width,
    height: height * 0.49,
    backgroundColor: '#fffcfa',
    padding: 24,
  },
  screen_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  image_screen: {
    width: 163,
    height: 163,
  },
  form_container: {
    width,
    padding: 24,
  },
});

export default ActivationScreen;
