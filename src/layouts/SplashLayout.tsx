import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ChevronRight} from '../assets/images';

const SplashLayout = ({children, imageHeader, navigation}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_container}>
        <Pressable
          style={styles.skip_text_container}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.skip_text}>Skip</Text>
          <Image source={ChevronRight} style={styles.skip_icon} />
        </Pressable>
        <View style={styles.header_image_container}>
          <Image source={imageHeader} style={styles.header_image} />
        </View>
      </View>
      {children}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  skip_text_container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  skip_text: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
  },
  skip_icon: {
    width: 8,
    height: 14,
  },
  header_container: {
    backgroundColor: '#fffcfa',
    height: height * 0.59,
    padding: 24,
    width,
  },
  header_image_container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  header_image: {
    width: 342,
    height: 271,
  },
});

export default SplashLayout;
