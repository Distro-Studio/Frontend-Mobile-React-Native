import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';

const CameraScreen = ({navigation}) => {
  const cameraRef = React.useRef(null);
  return (
    <View style={styles.container}>
      <RNCamera
        style={{flex: 1, alignItems: 'center'}}
        ref={cameraRef}
        captureAudio={false}
      />
      <Button title="smile" onPress={() => navigation.navigate('MainApp')} />
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
