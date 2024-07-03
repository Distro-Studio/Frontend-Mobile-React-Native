import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React from 'react';
import {
  IconAttendance,
  IconAttendanceExit,
  IconLocation,
} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {MapsContext} from '../../contexts/MapsContext';
import Geolocation from '@react-native-community/geolocation';
import calculateDistance from '../../utils';
import {ModalContext} from '../../contexts/ModalContext';
import {PresenceContext} from '../../contexts/PresenceContext';
import {useAppSelector} from '../../redux';
import AttendanceIcon from '../../assets/icons/attendance-icon.svg';
import AttendanceIconExit from '../../assets/icons/attendance-icon-exit.svg';
import LocationIcon from '../../assets/icons/location-icon.svg';

const HeaderAttendance = () => {
  const attendanceState = useAppSelector(
    state => state.attendance.attendanceState,
  );
  console.log('attendance redux header', attendanceState);
  const {state: presenceState} = React.useContext(PresenceContext);
  const {state} = React.useContext(MapsContext);
  const {dispatch} = React.useContext(ModalContext);
  const [isGPSEnabled, setIsGPSEnabled] = React.useState('');
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  const date = new Date().toLocaleString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  const navigation = useNavigation();

  function handleNavigation() {
    if (state.coords.lat === 0 && state.coords.long === 0) return;
    // if (
    //   calculateDistance(
    //     -7.562910072905711,
    //     110.8016758224319,
    //     state.coords.lat,
    //     state.coords.long,
    //   ) > 10
    // ) {
    //   return dispatch({type: 'show_modal_out_range', payload: true});
    // }

    if (isGPSEnabled !== 'No location provider available.') {
      return navigation.navigate('MapsScreen' as never);
    } else {
      return Alert.alert(
        'RSKI membutuhkan lokasi anda',
        'Aktifkan GPS anda untuk presensi!',
      );
    }
  }

  function hhmmss() {
    const dateTime = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
    });
    setTime(dateTime);
    return;
  }

  React.useEffect(() => {
    hhmmss();
    const dateInterval = setInterval(() => {
      hhmmss();
    }, 1000);
    return () => clearInterval(dateInterval);
  }, []);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      (position: any) => {},
      (error: any) => {
        if (error.message === 'No location provider available.') {
          setIsGPSEnabled(error.message);
        }
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  }, []);

  return (
    <View style={styles.header_attendance_container}>
      <Text style={styles.header_attendance_time}>{time}</Text>
      <Text style={styles.header_attendance_date}>{date}</Text>
      {attendanceState.in === false && (
        <Pressable style={styles.header_attendance} onPress={handleNavigation}>
          <AttendanceIcon />
          {/* <Image source={IconAttendance} style={{marginBottom: 8}} /> */}
          <Text style={{color: '#0C0E11', fontWeight: '700', marginTop: 8}}>
            Masuk
          </Text>
        </Pressable>
      )}
      {attendanceState.in === true && (
        <Pressable onPress={handleNavigation}>
          <LinearGradient
            start={{x: -1.6, y: 0.3}}
            end={{x: 0.5, y: -3.6}}
            locations={[0.1, 0.4]}
            colors={['#6C47FF', '#FC4C3C']}
            style={styles.header_attendance}>
            <AttendanceIconExit />
            {/* <Image source={IconAttendanceExit} style={{marginBottom: 8}} /> */}
            <Text style={{color: '#FFFFFF', fontWeight: '700', marginTop: 8}}>
              Keluar
            </Text>
          </LinearGradient>
        </Pressable>
      )}

      <View style={styles.header_location_container}>
        <LocationIcon />
        {/* <Image source={IconLocation} /> */}
        <Text style={{color: '#F5F5F5'}}>
          {state.coords.lat === 0 && state.coords.long === 0
            ? 'Sedang Mengambil Lokasi Anda'
            : 'Jl. Majapahit No. 24, Semarang'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_attendance_container: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_attendance_time: {
    fontSize: 24,
    color: '#F5F5F5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header_attendance_date: {
    color: '#F5F5F5',
    fontSize: 14,
    textAlign: 'center',
  },
  header_attendance: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    width: 118,
    height: 118,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  header_location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
  },
});

export default HeaderAttendance;
