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
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Employee" component={EmployeeScreen} />
      <Tab.Screen name="Activity" component={ActivityScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashIndex">
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashIndex" component={SplashScreenIndex} />
        <Stack.Screen name="SplashInfo1" component={SplashScreenInfo1} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="SplashInfo2" component={SplashScreenInfo2} />
        <Stack.Screen name="SplashInfo3" component={SplashScreenInfo3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
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
    </Stack.Navigator>
  );
};

export default Router;
