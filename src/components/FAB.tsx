import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {APP} from '../utils/CONSTANT';
import PlusIcon from '../assets/icons/plus-icon.svg';

const FAB = ({onPressFunc}) => {
  return (
    <Pressable
      onPress={onPressFunc}
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 1,
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: APP.COLORS['primary-400'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PlusIcon />
    </Pressable>
  );
};

export default FAB;
