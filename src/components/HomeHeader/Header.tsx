import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {HeaderUserProfile, IconNotification} from '../../assets/images';
import NotifyWhite from '../../assets/icons/activity-icon-white.svg';

const Header = () => {
  return (
    <View style={styles.header_profile}>
      <View style={styles.header_profile_container}>
        <Image source={HeaderUserProfile} style={styles.header_profile_image} />
        <View style={styles.header_profile_info}>
          <Text style={styles.header_profile_info_name}>
            Bayu Prasetya Adji S.
          </Text>
          <Text style={styles.header_profile_info_role}>Product Designer</Text>
        </View>
      </View>
      <NotifyWhite />
      {/* <Image source={IconNotification} style={{width: 24, height: 24}} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header_profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_profile_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  header_profile_image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  header_profile_info: {
    gap: 2,
  },
  header_profile_info_name: {
    fontWeight: 'bold',
    color: '#F5F5F5',
    fontSize: 16,
  },
  header_profile_info_role: {
    color: '#F1F2F3',
    fontSize: 14,
  },
});

export default Header;
