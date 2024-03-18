import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import {ChevronLeft} from '../../assets/images';

const CustomHeaderApp = ({backButton, children, rightIcon}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_header_top}>
        <View style={{width: 24, height: 24}}>
          {backButton && (
            <Pressable>
              <Image source={ChevronLeft} style={{width: 24, height: 24}} />
            </Pressable>
          )}
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>Employee</Text>
        </View>
        {rightIcon}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  container_header_top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default CustomHeaderApp;
