import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AuthLayout} from '../../layouts';

const LoginScreen = () => {
  return (
    <AuthLayout headerText={false}>
      <View style={styles.form_container}>
        <Text>asd</Text>
      </View>
    </AuthLayout>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  form_container: {
    width,
    padding: 24,
  },
});

export default LoginScreen;
