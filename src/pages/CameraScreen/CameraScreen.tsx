import React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {getResponsive} from '../../utils';
import {CameraButton} from '../../assets/icons';
import {useAppDispatch, useAppSelector} from '../../redux';
import {setAttendanceState} from '../../redux/attendanceSlice';

const CameraScreen = ({navigation}) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [isActive, setIsActive] = React.useState(false);
  const camera = React.useRef<Camera>(null);
  const device = useCameraDevice('front');
  const attendanceState = useAppSelector(
    state => state.attendance.attendanceState,
  );
  const attendanceDispatcher = useAppDispatch();

  async function takePhoto() {
    const photo = await camera?.current?.takeSnapshot({quality: 90});
    const result = await fetch(`file://${photo?.path}`);
    const data = await result.blob();
    console.log(data);
    // attendance state in || out bergantung pada response backend
    if (attendanceState.in === true) {
      attendanceDispatcher(setAttendanceState({in: false}));
    } else {
      attendanceDispatcher(setAttendanceState({in: true}));
    }
    // isSuccessAttendance bergantung pada response backend
    return navigation.navigate('Beranda', {
      props: {isSuccessAttendance: true},
    });
  }

  React.useEffect(() => {
    if (hasPermission === false) {
      requestPermission()
        .then(() => {
          setIsActive(true);
        })
        .catch(e => {
          console.log(e);
          setIsActive(false);
        });
    }
  }, [hasPermission]);

  console.log(hasPermission);

  return (
    <>
      {hasPermission && (
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
      )}
    </>
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
