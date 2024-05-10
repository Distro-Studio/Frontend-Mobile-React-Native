import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Input} from '../../components';
import {AuthLayout} from '../../layouts';
import {APP} from '../../utils/CONSTANT';

const ForgotPasswordScreen = ({navigation}: any) => {
  const [isError, setIsError] = React.useState(false);
  return (
    <AuthLayout headerText={false}>
      <View style={styles.container}>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 24,
            color: '#222831',
            fontWeight: '700',
            textAlign: 'center',
          }}>
          Lupa Kata Sandi
        </Text>
        <Text style={{color: '#222831', fontSize: 16, textAlign: 'center'}}>
          Masukkan alamat email yang terkait dengan akunmu dan kami akan
          mengirimkan instruksi untuk mengatur ulang kata sandi
        </Text>
        <View style={{marginTop: 24}}>
          <Input
            name="Email"
            placeholder="Email"
            type="email"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
          />
          {isError && (
            <View style={styles.wrong_email}>
              <Text style={{color: '#CA3D30'}}>
                Oops! Email anda tidak dapat ditemukan
              </Text>
            </View>
          )}
          <Pressable
            style={styles.login_button}
            onPress={() => navigation.navigate('EmailVerificationScreen')}>
            <Text style={styles.login_button_text}>Lanjut</Text>
          </Pressable>
          <Text style={styles.app_ver}>App ver 1.0</Text>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    // backgroundColor: 'red',
  },
  wrong_email: {
    borderRadius: 8,
    backgroundColor: '#FFE4E2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  app_ver: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    color: '#777986',
  },
  login_button: {
    backgroundColor: APP.COLORS['primary-500'],
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  login_button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ForgotPasswordScreen;
