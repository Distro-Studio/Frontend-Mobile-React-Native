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
  CutiScreen,
  LoginScreen,
  MapsScreen,
  NewPasswordScreen,
  ProfileScreen,
  ScheduleScreen,
  SplashScreenIndex,
  SplashScreenInfo1,
  SplashScreenInfo2,
  SplashScreenInfo3,
  DokumenScreen,
  GantiJadwalScreen,
  IjinScreen,
  KoperasiScreen,
  LaporanScreen,
  LemburScreen,
  SlipGajiScreen,
  FillScreen1,
  FillScreen2,
  FillScreen3,
  FillScreen4,
  FillScreen5,
  FillScreen6,
  GantiJadwalPilihKaryawan,
  GantiJadwalPilihJadwalKaryawan,
  GantiJadwalPilihJadwalUser,
  EventScreen,
  GantiJadwalDetailScreen,
} from '../pages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppSelector} from '../redux';

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
  const authState = useAppSelector(state => state.auth.authState);
  console.log('router: ', authState);
  // // const [stateLoggedIn, setStateLoggedIn] = React.useState(null);
  // async function getLoggedIn() {
  //   try {
  //     const value = await AsyncStorage.getItem('logged_in');
  //     setStateLoggedIn(value);
  //   } catch (e) {
  //     // saving error
  //   }
  // }
  // React.useEffect(() => {
  //   getLoggedIn();
  // }, []);
  return (
    <Stack.Navigator initialRouteName="SplashIndex">
      {/* Splash */}
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashIndex" component={SplashScreenIndex} />
        <Stack.Screen name="SplashInfo1" component={SplashScreenInfo1} />
        {/* {Object.keys(authState).length < 0 && (
        )} */}
      </Stack.Group>
      <Stack.Group
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <>
          <Stack.Screen name="SplashInfo2" component={SplashScreenInfo2} />
          <Stack.Screen name="SplashInfo3" component={SplashScreenInfo3} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
        {/* {Object.keys(authState).length < 0 && (
        )} */}
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
      {/* fill data screen */}
      <Stack.Group
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="FillScreen1" component={FillScreen1} />
        {/* <Stack.Screen name="FillScreen2" component={FillScreen2} />
        <Stack.Screen name="FillScreen3" component={FillScreen3} /> */}
        <Stack.Screen name="FillScreen2" component={FillScreen4} />
        <Stack.Screen name="FillScreen3" component={FillScreen5} />
        <Stack.Screen name="FillScreen4" component={FillScreen6} />
      </Stack.Group>
      {/* menus screen */}
      <Stack.Group
        screenOptions={{
          headerTitleAlign: 'center',
          header: () => null,
        }}>
        <Stack.Screen
          name="CutiScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={CutiScreen}
        />
        <Stack.Screen
          name="DokumenScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={DokumenScreen}
        />
        <Stack.Screen
          name="GantiJadwalScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={GantiJadwalScreen}
        />
        <Stack.Screen
          name="GantiJadwalPilihKaryawan"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={GantiJadwalPilihKaryawan}
        />
        <Stack.Screen
          name="GantiJadwalPilihJadwalKaryawan"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={GantiJadwalPilihJadwalKaryawan}
        />
        <Stack.Screen
          name="GantiJadwalPilihJadwalUser"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={GantiJadwalPilihJadwalUser}
        />
        <Stack.Screen
          name="GantiJadwalDetailScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={GantiJadwalDetailScreen}
        />
        {/* <Stack.Screen
          name="IjinScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={IjinScreen}
        /> */}
        <Stack.Screen
          name="EventScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={EventScreen}
        />
        <Stack.Screen
          name="KoperasiScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={KoperasiScreen}
        />
        <Stack.Screen
          name="LaporanScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={LaporanScreen}
        />
        <Stack.Screen
          name="LemburScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={LemburScreen}
        />
        <Stack.Screen
          name="SlipGajiScreen"
          options={{headerTitleAlign: 'center', header: () => null}}
          component={SlipGajiScreen}
        />
      </Stack.Group>

      {/* non splash screen */}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      {/* utility devices screen */}
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
      {/* detail pages */}
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
