import Geolocation from '@react-native-community/geolocation';
import React from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useCameraPermission} from 'react-native-vision-camera';
import {
  IconClose,
  IconFailPresence,
  IconModalRange,
  IconSuccessPresence,
} from '../../assets/images';
import {HomeActivity, HomeHeader, HomeMenus, ModalApp} from '../../components';
import {MapsContext} from '../../contexts/MapsContext';
import {ModalContext} from '../../contexts/ModalContext';
import calculateDistance from '../../utils';
import {APP} from '../../utils/CONSTANT';
import {webView} from '../../utils/WebView';
// import Geolocation from '@react-native-community/geolocation';

const HomeScreen = ({navigation, route}: any) => {
  // context
  const {dispatch: dispactherModal, state} = React.useContext(ModalContext);
  // state
  const {hasPermission, requestPermission} = useCameraPermission();
  // const [isModalLocation, setIsModalLocation] = React.useState(true);
  const [isModalRange, setIsModalRange] = React.useState(true);
  const [isModalSuccessPresence, setIsModalSuccessPresence] =
    React.useState(false);
  const [isModalFailPresence, setIsModalFailPresence] = React.useState(false);
  const [userLocation, setUserLocation] = React.useState('');
  const {dispatch} = React.useContext(MapsContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [distanceFromLocation, setDistanceFromLocation] = React.useState(0);
  const [isModalDifferent, setIsModalDifferent] = React.useState(true);

  const onRefresh = () => {
    setRefreshing(true);
    setUserLocation('');
    dispatch({
      type: 'delete_coords',
      payload: {
        lat: 0,
        long: 0,
      },
    });
    Geolocation.getCurrentPosition(
      (position: any) => {
        const location = JSON.stringify({
          long: position.coords.longitude,
          lat: position.coords.latitude,
        });

        setUserLocation(location);
        setRefreshing(false);
      },
      (error: any) => {
        if (error.message === 'No location provider available.') {
          Alert.alert(
            'RSKI membutuhkan lokasi anda',
            'Aktifkan GPS anda untuk presensi!',
          );
        }
      },
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'RSKI Attendance App',
          message: 'RSKI Attendance App ingin mengakses lokasi anda ',
          buttonNegative: 'Batal',
          buttonPositive: 'Ijinkan',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // setIsModalLocation(false);
        console.log('You can use the location');
      } else {
        // setIsModalLocation(true);
        console.log('location permission denied');
      }
    } catch (err) {
      console.warn('err', err);
    }
  }

  /*
    mendapatkan lokasi koordinat user lalu passing koordinat menggunakan context api / props ke mapsScreen
    Next step:
    1. Bagaimana cara mengetahui bahwa user mengaktifkan GPS?
      -> menggunakan PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  */
  Geolocation.getCurrentPosition(
    (position: any) => {
      const location = JSON.stringify({
        long: position.coords.longitude,
        lat: position.coords.latitude,
      });
      console.log(location);
      setUserLocation(location);
    },
    (error: any) => {
      if (error.message === 'No location provider available.') {
        Alert.alert(
          'RSKI membutuhkan lokasi anda',
          'Aktifkan GPS anda untuk presensi!',
        );
      }
    },
    {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
  );

  React.useEffect(() => {
    if (Object.keys(userLocation).length !== 0) {
      dispatch({type: 'save_coords', payload: JSON.parse(userLocation)});
      setDistanceFromLocation(
        calculateDistance(
          -7.562910072905711,
          110.8016758224319,
          JSON.parse(userLocation).lat,
          JSON.parse(userLocation).long,
        ),
      );
    }
  }, [userLocation]);

  React.useEffect(() => {
    setIsModalRange(state.modal_out_range);
  }, [state.modal_out_range]);

  React.useEffect(() => {
    requestLocationPermission();
    if (hasPermission === false) {
      requestPermission();
    }
  }, []);

  React.useEffect(() => {
    if (route.params?.props) {
      if (route.params?.props?.isSuccessAttendance) {
        setIsModalSuccessPresence(route.params?.props.isSuccessAttendance);
      } else {
        setIsModalFailPresence(!route.params?.props.isSuccessAttendance);
      }
    }
  }, [route.params?.props, route.params?.props.isSuccessAttendance]);

  return (
    <>
      {isModalSuccessPresence && (
        <ModalApp isModal={isModalSuccessPresence}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={IconSuccessPresence} />
            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#0C0E11',
              }}>
              Absen Telah Berhasil
            </Text>
            <Text style={{marginTop: 16, color: '#777986'}}>
              {` Kerja bagus! Kehadiran Anda telah
  berhasil dicatat. Anda sudah siap
                    untuk hari ini.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalSuccessPresence(false)}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: APP.COLORS['primary-500'],
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Selesai
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {isModalFailPresence && (
        <ModalApp isModal={isModalFailPresence}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={IconFailPresence} />
            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                fontWeight: 'bold',
                color: '#0C0E11',
              }}>
              Maaf Absensi Anda Tidak Berhasil
            </Text>
            <Text style={{marginTop: 16, color: '#777986'}}>
              {`      Maaf! Kehadiran Anda belum 
berhasil dicatat. Silahkan lakukan 
                  absensi ulang.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalFailPresence(false)}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: APP.COLORS['primary-500'],
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Ulangi
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {/* {isModalLocation && (
        <ModalApp isModal={isModalLocation}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => requestLocationPermission()}
              style={{marginLeft: 'auto', marginBottom: 16}}>
              <Image source={IconClose} />
            </Pressable>
            <Image source={IconModalLocation} style={{marginBottom: 16}} />
            <Text style={{color: '#0C0E11', fontWeight: 'bold'}}>
              Aktifkan Lokasi
            </Text>
            <Text style={{color: '#0C0E11', fontWeight: 'bold'}}>
              untuk Kehadiran Tanpa Hambatan
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => requestLocationPermission()}
                style={[styles.button_modal, styles.button_modal_reject]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_reject]}>
                  Tidak
                </Text>
              </Pressable>
              <Pressable
                onPress={() => requestLocationPermission()}
                style={[styles.button_modal, styles.button_modal_accept]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_accept]}>
                  Ya
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )} */}

      {isModalDifferent && (
        <ModalApp isModal={isModalDifferent}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                setIsModalDifferent(false);
                // dispactherModal({type: 'hide_modal_out_range', payload: false});
              }}
              style={{marginLeft: 'auto', marginBottom: 16}}>
              <Image source={IconClose} />
            </Pressable>
            <Image source={IconModalRange} style={{marginBottom: 16}} />
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Wah, ada yang berbeda!
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#777986',
                marginVertical: 8,
                textAlign: 'center',
              }}>
              {`Sepertinya foto Anda berbeda dengan saat
masuk. Untuk melanjutkan, silakan berikan 
alasan Anda di bawah ini.`}
            </Text>

            <TextInput
              multiline={true}
              numberOfLines={2}
              style={{
                backgroundColor: '#FCFCFC',
                borderColor: '#EBEBED',
                borderWidth: 1,
                width: '100%',
                padding: 8,
                borderRadius: 12,
                // color: '#BABCBF',
              }}
              placeholder="Masukkan alasanmu"
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
            />

            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => {}}
                style={[styles.button_modal, styles.button_modal_accept]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_accept]}>
                  Kirim
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {isModalRange && distanceFromLocation > 10 && (
        <ModalApp isModal={isModalRange}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                setIsModalRange(false);
                // dispactherModal({type: 'hide_modal_out_range', payload: false});
              }}
              style={{marginLeft: 'auto', marginBottom: 16}}>
              <Image source={IconClose} />
            </Pressable>
            <Image source={IconModalRange} style={{marginBottom: 16}} />
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Anda berada di luar area kehadiran
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#777986',
                marginVertical: 8,
                textAlign: 'center',
              }}>
              {`Maaf, sepertinya Anda berada di
luar area absen. Untuk
melanjutkan, silakan lakukan 
dengan izin.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => {
                  dispactherModal({
                    type: 'hide_modal_out_range',
                    payload: false,
                  });
                  navigation.navigate('CutiScreen');
                }}
                style={[styles.button_modal, styles.button_modal_accept]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_accept]}>
                  Ijin Sekarang!
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      <View style={styles.screen_container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <HomeHeader />
          <View style={styles.home_menu_container}>
            <HomeMenus />
            <HomeActivity />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    backgroundColor: APP.COLORS['primary-500'],
  },
  button_modal_container: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  button_modal: {
    paddingVertical: 10,
    flex: 1,
    borderRadius: 8,
  },
  button_modal_reject: {
    borderColor: '#CA3D30',
    borderWidth: 1,
  },
  button_modal_accept: {
    backgroundColor: APP.COLORS['primary-500'],
  },
  button_modal_text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  modal_text_reject: {
    color: '#CA3D30',
  },
  modal_text_accept: {
    color: '#FFFFFF',
  },
  home_menu_container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
