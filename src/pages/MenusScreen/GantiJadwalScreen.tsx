import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const GantiJadwalScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Tukar Jadwal'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Tukar Jadwal</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default GantiJadwalScreen;
