import React from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Input} from '../../components';
import {AuthLayout} from '../../layouts';
import {APP} from '../../utils/CONSTANT';
import {webView} from '../../utils/WebView';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [email, onChangeEmail] = React.useState<string>('');
  const [password, onChangePassword] = React.useState<string>('');
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEmailError, setIsEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [isPasswordError, setIsPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  async function storeLoggedIn(value: string) {
    try {
      await AsyncStorage.setItem('logged_in', value);
    } catch (e) {
      // saving error
    }
  }

  async function handleLogin() {
    try {
      if (email === '' && password === '') {
        setIsEmailError(true);
        setIsPasswordError(true);
        setEmailErrorMessage('Email harus diisi!');
        setPasswordErrorMessage('Password harus diisi!');
        return;
      }

      if (email === '') {
        setIsEmailError(true);
        setEmailErrorMessage('Email harus diisi!');
        return;
      } else if (email !== 'ivan@gmail.com') {
        setIsEmailError(true);
        setEmailErrorMessage('Email tidak ditemukan!');
        return;
      } else {
        setIsEmailError(false);
        setEmailErrorMessage('');
      }
      if (password === '') {
        setIsPasswordError(true);
        setPasswordErrorMessage('Password harus diisi!');
        return;
      } else if (password !== 'ivan123') {
        setIsPasswordError(true);
        setPasswordErrorMessage('Password salah!');
        return;
      } else {
        setIsPasswordError(false);
        setPasswordErrorMessage('');
      }

      if (email === 'ivan@gmail.com' && password === 'ivan123') {
        navigation.navigate('FillScreen1');
        storeLoggedIn('logged_in');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {isLoading ? (
        <ActivityIndicator
          style={styles.loading_screen}
          color="#10A9A5"
          size="large"
        />
      ) : (
        <AuthLayout headerText={false}>
          <View
            style={
              Platform.OS === 'web'
                ? styles.webViewInstance
                : styles.form_container
            }>
            <Input
              name="Email"
              placeholder="Email"
              type="email"
              onChangeText={onChangeEmail}
              value={email}
              customStyle={isEmailError}
            />
            {isEmailError && (
              <Text style={{color: 'red'}}>{emailErrorMessage}</Text>
            )}
            <Input
              name="Kata Sandi"
              placeholder="Kata Sandi"
              type="password"
              onChangeText={onChangePassword}
              value={password}
              customStyle={isPasswordError}
            />
            {isPasswordError && (
              <Text style={{color: 'red'}}>{passwordErrorMessage}</Text>
            )}
            <Text
              style={styles.forgot_password}
              onPress={() => navigation.navigate('ForgotPasswordScreen')}>
              Lupa Password?
            </Text>
            {isError && (
              <View style={styles.wrong_password}>
                <Text style={{color: '#CA3D30'}}>
                  Oops! Email atau kata sandimu salah
                </Text>
              </View>
            )}
            <Pressable style={styles.login_button} onPress={handleLogin}>
              <Text style={styles.login_button_text}>Masuk</Text>
            </Pressable>
            {/* <View style={styles.account}>
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
        </Pressable> */}
            <Text style={styles.app_ver}>App ver 1.0</Text>
          </View>
        </AuthLayout>
      )}
    </>
  );
};

const {width} = Dimensions.get('window');

let webViewInstance = webView;
webViewInstance = {
  padding: 16,
  gap: 16,
};

const styles = StyleSheet.create({
  webViewInstance,
  loading_screen: {
    flex: 1,
  },
  wrong_password: {
    borderRadius: 8,
    backgroundColor: '#FFE4E2',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  app_ver: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
    color: '#777986',
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
    fontWeight: '500',
    color: '#10A9A5',
    fontSize: 14,
  },
  login_button: {
    backgroundColor: APP.COLORS['primary-500'],
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
    borderColor: APP.COLORS['primary-500'],
    borderWidth: 1,
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  activate_button_text: {
    textAlign: 'center',
    color: APP.COLORS['primary-500'],
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
