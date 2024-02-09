import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import React from 'react';
import {SplashLogo} from '../../assets/images';

const LoginScreen = () => {
  return (
    <View style={styles.screen_container}>
      <View style={styles.screen_header}>
        <Image source={SplashLogo} style={styles.image_screen} />
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
  screen_header: {
    width,
    height: height * 0.45,
    backgroundColor: '#fffcfa',
    justifyContent: 'center',
    alignItems: 'center',
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

export default LoginScreen;
