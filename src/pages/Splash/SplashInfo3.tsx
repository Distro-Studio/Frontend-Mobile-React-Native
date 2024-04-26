import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SplashInfoImage3} from '../../assets/images';
import {SplashLayout} from '../../layouts';
import {APP} from '../../utils/CONSTANT';
const SplashInfo3 = ({navigation}: any) => {
  return (
    <SplashLayout imageHeader={SplashInfoImage3} navigation={navigation}>
      <View style={styles.content_container}>
        <View>
          <Text style={styles.content_text_bold}>
            Semua tugas karyawan dalam satu aplikasi!
          </Text>
          <Text style={styles.content_text}>
            Siap untuk produktivitas puncak? Mari selami dan tingkatkan
            efisiensi Anda!
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
            <Text style={styles.splash_button_text}>Masuk</Text>
          </Pressable>
        </View>
      </View>
    </SplashLayout>
  );
};

const styles = StyleSheet.create({
  content_container: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  content_text_bold: {
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Inter',
    color: '#222831',
  },
  content_text: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: 'Inter',
    color: '#454545',
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
    backgroundColor: APP.COLORS['primary-100'],
  },
  splash_progress_bar_active: {
    width: 74,
    height: 6,
    borderRadius: 4,
    backgroundColor: APP.COLORS['primary-500'],
  },
  splash_button: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: APP.COLORS['primary-500'],
  },
  splash_button_text: {
    color: '#FFFFFF',
  },
});

export default SplashInfo3;
