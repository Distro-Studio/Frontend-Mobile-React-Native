import React from 'react';
import {Dimensions, Image, Platform, StyleSheet, View} from 'react-native';
import {HeaderHome} from '../../assets/images';
import {APP} from '../../utils/CONSTANT';
import Header from './Header';
import HeaderAttendance from './HeaderAttendance';
import HeaderTimeAttendance from './HeaderTimeAttendance';
import {webView} from '../../utils/WebView';

const HomeHeader = () => {
  return (
    <View
      style={
        Platform.OS === 'web' ? styles.webViewInstance : styles.header_container
      }>
      <Image source={HeaderHome} style={{position: 'absolute'}} />
      <Header />
      <HeaderAttendance />
      <HeaderTimeAttendance />
    </View>
  );
};

const {width, height} = Dimensions.get('window');

let webViewInstance = webView;
webViewInstance = {
  backgroundColor: APP.COLORS['primary-500'],
  paddingHorizontal: 24,
  paddingVertical: 24,
};

const styles = StyleSheet.create({
  webView,
  webViewInstance,
  header_container: {
    width,
    height: height * 0.55,
    backgroundColor: APP.COLORS['primary-500'],
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
});

export default HomeHeader;
