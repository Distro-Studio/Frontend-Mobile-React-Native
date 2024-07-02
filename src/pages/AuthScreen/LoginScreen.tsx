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
import APIEndpoints from '../../services/endpoints';
import {object, string} from 'yup';
import {Formik} from 'formik';
import {useAppDispatch} from '../../redux';
import {setAuthState} from '../../redux/authSlice';

let loginSchema = object({
  password: string().required('Password harus diisi!'),
  email: string().email('Email tidak valid!').required('Email harus diisi!'),
});

const LoginScreen = ({navigation}: any) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();

  const formData = new FormData();

  // async function storeLoggedIn(value: string) {
  //   try {
  //     await AsyncStorage.setItem('logged_in', value);
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  async function handleLogin(fields: {email: string; password: string}) {
    try {
      // api login
      setIsLoading(true);
      setTimeout(() => {
        navigation.navigate('FillScreen1');
        // storeLoggedIn('logged_in');
        setIsLoading(false);
      }, 2000);
      // formData.append('email', fields.email);
      // formData.append('password', fields.password);

      // const response = await APIEndpoints.authLogin(formData);
      // if (response.status === 200) {
      //   navigation.navigate('FillScreen1');
      //   console.log(response);
      //   // dispatch(setAuthState(response.data))
      //   // storeLoggedIn('logged_in');
      // }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
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
            <Formik
              initialValues={{email: '', password: ''}}
              validationSchema={loginSchema}
              onSubmit={values => handleLogin(values)}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <>
                  <Input
                    name="Email"
                    placeholder="Email"
                    type="email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                  />
                  {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )}
                  <Input
                    name="Kata Sandi"
                    placeholder="Kata Sandi"
                    type="password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={errors.password}
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.password}
                    </Text>
                  )}
                  <Text
                    style={styles.forgot_password}
                    onPress={() => navigation.navigate('ForgotPasswordScreen')}>
                    Lupa Password?
                  </Text>
                  <Pressable
                    style={styles.login_button}
                    onPress={() => handleSubmit()}>
                    <Text style={styles.login_button_text}>Masuk</Text>
                  </Pressable>
                </>
              )}
            </Formik>
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
