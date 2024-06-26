import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import MapView, {Circle, Marker} from 'react-native-maps';
import {MapsContext} from '../../contexts/MapsContext';

const MapsScreen = ({navigation}: any) => {
  const {state} = React.useContext(MapsContext);
  const RSKIRegion = {
    latitude: -7.562910072905711,
    longitude: 110.8016758224319,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // const [userCoordinate, setUserCoordinate] = React.useState({
  //   latitude: state.coords.lat ? state.coords.lat : 0,
  //   longitude: state.coords.long ? state.coords.long : 0,
  // });

  // React.useEffect(() => {
  //   setUserCoordinate({
  //     latitude: state.coords.lat,
  //     longitude: state.coords.long,
  //   });
  // }, [state.coords]);

  return (
    <View style={styles.screen_container}>
      <MapView style={styles.map} initialRegion={RSKIRegion}>
        <Marker coordinate={RSKIRegion} />
        <Circle
          center={RSKIRegion}
          radius={1000}
          strokeWidth={1}
          strokeColor={'#1a66ff'}
          fillColor={'rgba(230,238,255,0.6)'}
        />
        <Marker
          coordinate={{
            latitude: state.coords.lat,
            longitude: state.coords.long,
          }}
        />
      </MapView>
      <View style={styles.address_container}>
        <View style={styles.address_header}>
          <Text style={{color: '#777986'}}>Konfirmasi Alamat</Text>
          <Text style={{color: '#777986'}}>Akurat hingga 1.5 km</Text>
        </View>
        <Text style={{color: '#222831'}}>
          Jl. Simpang Lima, Mugassari, Kec. Semarang Sel., Kota Semarang, Jawa
          Tengah 50249
        </Text>
        <View style={styles.buttons}>
          <Pressable
            style={[styles.button, styles.secondary_button]}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.button_text, styles.secondary_text]}>
              Kembali
            </Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.active_button]}
            onPress={() => navigation.navigate('CameraScreen')}>
            <Text style={[styles.button_text, styles.active_text]}>
              Konfirmasi
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  secondary_text: {
    color: APP.COLORS['primary-500'],
  },
  secondary_button: {
    borderColor: APP.COLORS['primary-500'],
    borderWidth: 1,
  },
  active_text: {
    color: '#FFFFFF',
  },
  button_text: {
    textAlign: 'center',
  },
  active_button: {
    backgroundColor: APP.COLORS['primary-500'],
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '50%',
  },
  buttons: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
    justifyContent: 'center',
  },
  address_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  address_container: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 20,
    zIndex: 10,
    left: 24,
    right: 24,
    padding: 24,
  },
  screen_container: {
    flex: 1,
  },
});

export default MapsScreen;
