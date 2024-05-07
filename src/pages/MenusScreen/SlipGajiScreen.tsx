import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const SlipGajiScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Slip Gaji'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Slip Gaji</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default SlipGajiScreen;
