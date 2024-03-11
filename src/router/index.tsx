import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomTabIcon} from '../components';
import {
  ActivationScreen,
  ActivityScreen,
  EmployeeScreen,
  HomeScreen,
  LoginScreen,
  MapsScreen,
  ProfileScreen,
  ScheduleScreen,
  SplashScreenIndex,
  SplashScreenInfo1,
  SplashScreenInfo2,
  SplashScreenInfo3,
} from '../pages';
import {Platform} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = ({route}: any) => ({
  headerShown: false,
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
      {/* <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashIndex" component={SplashScreenIndex} />
        <Stack.Screen name="SplashInfo1" component={SplashScreenInfo1} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="SplashInfo2" component={SplashScreenInfo2} />
        <Stack.Screen name="SplashInfo3" component={SplashScreenInfo3} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ActivationScreen" component={ActivationScreen} />
      </Stack.Group> */}
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
    </Stack.Navigator>
  );
};

export default Router;
