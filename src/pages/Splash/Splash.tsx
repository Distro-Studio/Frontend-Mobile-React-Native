import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SplashLogo} from '../../assets/images';

const Splash = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('SplashInfo1');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={SplashLogo} style={styles.splash_logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  splash_logo: {width: 163, height: 163},
});

export default Splash;
