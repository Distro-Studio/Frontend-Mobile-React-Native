import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const KoperasiScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Koperasi'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Koperasi</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default KoperasiScreen;
