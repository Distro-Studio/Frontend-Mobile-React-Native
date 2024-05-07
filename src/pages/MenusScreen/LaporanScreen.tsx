import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const LaporanScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Laporan'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Laporan</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default LaporanScreen;
