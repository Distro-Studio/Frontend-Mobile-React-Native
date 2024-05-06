import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Platform} from 'react-native';
import {BottomTabIcon} from '../components';
import {
  ActivationScreen,
  ActivityScreen,
  CameraScreen,
  DetailEmployeeScreen,
  DetailScheduleScreen,
  EmailVerificationScreen,
  EmployeeScreen,
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  MapsScreen,
  NewPasswordScreen,
  ProfileScreen,
  ScheduleScreen,
  SplashScreenIndex,
  SplashScreenInfo1,
  SplashScreenInfo2,
  SplashScreenInfo3,
} from '../pages';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: any) => ({
  header: () => null,
  tabBarShowLabel: false,
  tabBarIcon: ({focused}: any) => (
    <BottomTabIcon focused={focused} title={route.name} />
  ),
  tabBarStyle: {
    height: 60,
    width: Platform.OS === 'web' ? '500px' : 'auto',
    margin: Platform.OS === 'web' ? 'auto' : 'null',
  },
});

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Beranda" component={HomeScreen} />
      <Tab.Screen name="Jadwal" component={ScheduleScreen} />
      <Tab.Screen name="Karyawan" component={EmployeeScreen} />
      <Tab.Screen name="Aktivitas" component={ActivityScreen} />
      <Tab.Screen name="Profil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const [stateLoggedIn, setStateLoggedIn] = React.useState(null);
  async function getLoggedIn() {
    try {
      const value = await AsyncStorage.getItem('logged_in');
      setStateLoggedIn(value);
    } catch (e) {
      // saving error
    }
  }
  React.useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <Stack.Navigator initialRouteName="SplashIndex">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashIndex" component={SplashScreenIndex} />
        {stateLoggedIn === null && (
          <>
            <Stack.Screen name="SplashInfo1" component={SplashScreenInfo1} />
          </>
        )}
      </Stack.Group>
      <Stack.Group
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        {stateLoggedIn === null && (
          <>
            <Stack.Screen name="SplashInfo2" component={SplashScreenInfo2} />
            <Stack.Screen name="SplashInfo3" component={SplashScreenInfo3} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </>
        )}
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="EmailVerificationScreen"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="ActivationScreen" component={ActivationScreen} />
      </Stack.Group>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapsScreen"
        component={MapsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailEmployeeScreen"
        options={{headerTitleAlign: 'center', header: () => null}}
        component={DetailEmployeeScreen}
      />
      <Stack.Screen
        name="DetailScheduleScreen"
        options={{headerTitleAlign: 'center', header: () => null}}
        component={DetailScheduleScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
