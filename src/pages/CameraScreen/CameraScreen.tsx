import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {getResponsive} from '../../utils';
import {CameraButton} from '../../assets/icons';

const CameraScreen = ({navigation}) => {
  const camera = React.useRef<Camera>(null);
  const device = useCameraDevice('front');

  async function takePhoto() {
    const photo = await camera?.current?.takeSnapshot({quality: 90});
    const result = await fetch(`file://${photo?.path}`);
    const data = await result.blob();
    console.log(data);
    return navigation.navigate('Beranda', {
      props: {isSuccessPresence: true, isFailPresence: false},
    });
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
      />
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          padding: 16,
          height: getResponsive(185, 'height'),
          position: 'absolute',
          flex: 1,
          bottom: 0,
          right: 0,
          left: 0,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
          }}>
          <Text style={{color: '#F8CB58'}}>PHOTO</Text>
          <Pressable onPress={() => takePhoto()}>
            <CameraButton />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default CameraScreen;
