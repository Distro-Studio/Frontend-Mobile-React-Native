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

const LoginScreen = ({navigation}: any) => {
  const [email, onChangeEmail] = React.useState<string>('');
  const [password, onChangePassword] = React.useState<string>('');
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleLogin() {
    try {
      if (email === 'ivan@gmail.com' && password === 'ivan123') {
        navigation.navigate('MainApp');
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
            />
            <Input
              name="Kata Sandi"
              placeholder="Kata Sandi"
              type="password"
              onChangeText={onChangePassword}
              value={password}
            />
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
              <Text style={styles.login_button_text}>Login</Text>
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
