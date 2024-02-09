import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {Input} from '../../components';
import {AuthLayout} from '../../layouts';

const LoginScreen = ({navigation}: any) => {
  return (
    <AuthLayout headerText={false}>
      <View style={styles.form_container}>
        <Input name="Email" placeholder="Email address" type="email" />
        <Input name="Password" placeholder="Password" type="password" />
        <Text style={styles.forgot_password}>Forgot Password?</Text>
        <Pressable style={styles.login_button}>
          <Text style={styles.login_button_text}>Login</Text>
        </Pressable>
        <View style={styles.account}>
          <View style={styles.divider} />
          <View style={styles.account_block}>
            <Text>Don’t have an account?</Text>
          </View>
          <View style={styles.divider} />
        </View>
        <Pressable
          style={styles.activate_button}
          onPress={() => navigation.navigate('ActivationScreen')}>
          <Text style={styles.activate_button_text}>Activate Now</Text>
        </Pressable>
        <Text style={styles.app_ver}>App ver 1.0</Text>
      </View>
    </AuthLayout>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  app_ver: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
  account_block: {
    backgroundColor: '#F5F5F5',
    padding: 2,
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  divider: {
    height: 1,
    width: 100,
    backgroundColor: '#E3E3E3',
  },
  form_container: {
    width,
    padding: 24,
    gap: 16,
  },
  forgot_password: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 14,
  },
  login_button: {
    backgroundColor: '#FF6000',
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  login_button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  activate_button: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FF6000',
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activate_button_text: {
    textAlign: 'center',
    color: '#FF6000',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
