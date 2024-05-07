import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const DokumenScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Dokumen'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Dokumen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});
export default DokumenScreen;
