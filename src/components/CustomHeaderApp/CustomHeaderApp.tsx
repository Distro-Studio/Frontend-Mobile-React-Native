import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronLeft} from '../../assets/images';

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
        <View style={{width: 24, height: 24}}>
          {backButton && (
            <Pressable onPress={() => navigation.goBack()}>
              <Image source={ChevronLeft} style={{width: 24, height: 24}} />
            </Pressable>
          )}
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>{screenName}</Text>
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
  },
});

export default CustomHeaderApp;
