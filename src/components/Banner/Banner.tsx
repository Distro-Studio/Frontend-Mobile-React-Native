import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import {Image} from 'react-native-svg';
import {RSKILogoSVG} from '../../assets/images';

const Banner = ({headerText, buttonText, onPress}) => {
  return (
    <View style={styles.container}>
      <RSKILogoSVG style={{position: 'absolute', right: 0, bottom: 0}} />
      <Text style={styles.headerText}>{headerText}</Text>
      <Pressable style={styles.containerButton} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: APP.COLORS['primary-500'],
    position: 'relative',
  },
  containerButton: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 14,
    marginTop: 16,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFFFF',
  },
  buttonText: {
    color: APP.COLORS['primary-500'],
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Banner;
