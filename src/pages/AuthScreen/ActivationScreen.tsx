import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {AuthLayout} from '../../layouts';
import {Input} from '../../components';
import {APP} from '../../utils/CONSTANT';

const ActivationScreen = ({navigation}: any) => {
  return (
    <AuthLayout headerText={true} navigation={navigation}>
      <View style={styles.form_container}>
        <Input name="Email" placeholder="Email address" type="email" />
        <Input name="Password" placeholder="Password" type="password" />
        <Input
          name="Confirm Password"
          placeholder="Confirm Password"
          type="password"
        />
        <Pressable style={styles.send_button}>
          <Text style={styles.send_button_text}>Send</Text>
        </Pressable>
        <Text style={styles.issues}>
          <Text style={styles.issues_text}>
            Having issues with the activation?{' '}
          </Text>
          Chat Us
        </Text>
      </View>
    </AuthLayout>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  issues: {
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    color: APP.COLORS['primary-500'],
    fontWeight: 'bold',
  },
  issues_text: {
    fontWeight: 'normal',
    color: '#222831',
  },
  form_container: {
    width,
    padding: 24,
    gap: 16,
  },
  send_button: {
    backgroundColor: APP.COLORS['primary-500'],
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  send_button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ActivationScreen;
