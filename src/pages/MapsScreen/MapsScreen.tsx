import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const MapsScreen = () => {
  return (
    <View style={styles.screen_container}>
      <Text>MapsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen_container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default MapsScreen;
