import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const LemburScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Lembur'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Lembur</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default LemburScreen;
