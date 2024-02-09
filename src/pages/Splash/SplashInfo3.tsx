import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ChevronRight, SplashInfoImage3} from '../../assets/images';
const SplashInfo3 = ({navigation}) => {
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
          <Image source={SplashInfoImage3} style={styles.header_image} />
        </View>
      </View>
      <View style={styles.content_container}>
        <View>
          <Text style={styles.content_text_bold}>
            All employee duty in one app!
          </Text>
          <Text style={styles.content_text}>
            Ready for peak productivity? Let's dive in and elevate your
            efficiency!
          </Text>
        </View>
        <View style={styles.bottom_nav}>
          <View style={styles.splash_progress_bar_container}>
            <View style={styles.splash_progress_bar} />
            <View style={styles.splash_progress_bar} />
            <View style={styles.splash_progress_bar_active} />
          </View>
          <Pressable
            style={styles.splash_button}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.splash_button_text}>Next</Text>
          </Pressable>
        </View>
      </View>
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
  content_container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  content_text_bold: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  content_text: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Inter',
  },
  bottom_nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splash_progress_bar_container: {
    flexDirection: 'row',
    gap: 6,
  },
  splash_progress_bar: {
    width: 16,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#FFCEB0',
  },
  splash_progress_bar_active: {
    width: 74,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#FF6000',
  },
  splash_button: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FF6000',
  },
  splash_button_text: {
    color: '#FFFFFF',
  },
});

export default SplashInfo3;
