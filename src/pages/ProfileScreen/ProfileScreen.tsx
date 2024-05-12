import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp} from '../../components';

const ProfileScreen = () => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 20, height: 20}} />
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Profil'}
        rightIcon={headerIcon()}
      />
    </>
  );
};

export default ProfileScreen;
