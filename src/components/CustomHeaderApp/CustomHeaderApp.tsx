import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
// import {ChevronLeft} from '../../assets/images';
import ChevronLeft from '../../assets/icons/chevron-left-icon.svg';

const CustomHeaderApp = ({
  backButton,
  children,
  rightIcon,
  screenName,
}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container_header_top(children)}>
        <View style={{width: 20, height: 20}}>
          {backButton && (
            <Pressable onPress={() => navigation.goBack()}>
              <ChevronLeft />
              {/* <Image source={ChevronLeft} style={{width: 20, height: 20}} /> */}
            </Pressable>
          )}
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>{screenName}</Text>
        </View>
        <View style={{width: 20, height: 20}}>{rightIcon}</View>
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 14,
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
  container_header_top: (children: any) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: children === undefined ? 0 : 16,
  }),
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#0C0E11',
  },
});

export default CustomHeaderApp;
