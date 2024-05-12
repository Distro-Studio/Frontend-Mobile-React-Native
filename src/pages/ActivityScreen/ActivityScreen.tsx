import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {IconNotificationBlack} from '../../assets/images';

const ActivityScreen = () => {
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
        screenName={'Aktivitas'}
        rightIcon={headerIcon()}
      />
    </>
  );
};

export default ActivityScreen;
