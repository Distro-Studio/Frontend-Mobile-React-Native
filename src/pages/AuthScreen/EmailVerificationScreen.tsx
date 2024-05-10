import {View, Text, Pressable, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import {AuthLayout} from '../../layouts';
import {APP} from '../../utils/CONSTANT';
import {getResponsive} from '../../utils';

const {height} = Dimensions.get('window');

const EmailVerificationScreen = () => {
  return (
    <AuthLayout headerText={false} type="verification">
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#222831'}}>
          Kami telah mengirimkan email verifikasi ke
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#222831',
            fontWeight: '700',
          }}>
          [alamat email pengguna]
        </Text>
        <Text
          style={{
            marginVertical: 16,
            textAlign: 'center',
            fontSize: 16,
            color: '#222831',
          }}>
          Silakan periksa kotak masuk atau folder spam kamu dan klik tautan
          verifikasi yang terdapat di dalam email tersebut
        </Text>
        <Text style={{textAlign: 'center', fontSize: 16, color: '#222831'}}>
          Belum menerima email?
        </Text>
        <Pressable>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              color: APP.COLORS['primary-500'],
            }}>
            Kirim Ulang
          </Text>
        </Pressable>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: getResponsive(363, 'height'),
    padding: 24,
  },
});

export default EmailVerificationScreen;
