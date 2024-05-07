import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const IjinScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Ijin'} />
      <View style={styles.container}>
        <Text style={{color: 'black'}}>Ijin</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default IjinScreen;
