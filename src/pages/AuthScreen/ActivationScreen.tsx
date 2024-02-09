import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AuthLayout} from '../../layouts';

const ActivationScreen = () => {
  return (
    <AuthLayout headerText={true}>
      <View style={styles.form_container}>
        <Text>asd</Text>
      </View>
    </AuthLayout>
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
