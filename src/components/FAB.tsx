import {View, Text} from 'react-native';
import React from 'react';
import {APP} from '../utils/CONSTANT';

const FAB = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 6,
        width: 48,
        height: 48,
        borderRadius: 8,
        backgroundColor: APP.COLORS['primary-400'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>FAB</Text>
    </View>
  );
};

export default FAB;
