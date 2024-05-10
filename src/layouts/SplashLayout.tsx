import {
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ChevronRight} from '../assets/images';
import {webView} from '../utils/WebView';
import {getResponsive} from '../utils';

const SplashLayout = ({children, imageHeader, navigation}: any) => {
  return (
    <View style={Platform.OS === 'web' ? styles.webView : styles.container}>
      <View
        style={
          Platform.OS === 'web' ? styles.webViewHeader : styles.header_container
        }>
        <Pressable
          style={styles.skip_text_container}
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.skip_text}>Skip</Text>
          <Image source={ChevronRight} style={styles.skip_icon} />
        </Pressable>
        <View style={styles.header_image_container}>
          <Image
            source={imageHeader}
            style={
              Platform.OS === 'web' ? styles.webViewImage : styles.header_image
            }
          />
        </View>
      </View>
      {children}
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const webViewHeader = {
  width: '100%',
  maxWidth: '500px',
  padding: 24,
  backgroundColor: '#fffcfa',
  margin: 'auto',
};

const webViewImage = {
  display: 'block',
  width: 342,
  height: 271,
  margin: 'auto',
};

const styles = StyleSheet.create({
  webView,
  webViewHeader,
  webViewImage,
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
    color: '#0C0E11',
  },
  skip_icon: {
    width: getResponsive(8, 'width'),
    height: getResponsive(14, 'height'),
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
