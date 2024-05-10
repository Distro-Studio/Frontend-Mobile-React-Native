import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {ChevronLeft, IconHelp} from '../assets/images';
import {getResponsive} from '../utils';
import {useNavigation} from '@react-navigation/native';

const FillDataScreenLayout = ({children, routeName}) => {
  const paginationBar = [1, 2, 3, 4, 5, 6];
  const navigation = useNavigation();

  console.log(routeName.split('').pop());

  return (
    <>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 24,
          backgroundColor: '#fffcfa',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={ChevronLeft}
            style={{
              width: getResponsive(24, 'width'),
              height: getResponsive(24, 'height'),
            }}
          />
        </Pressable>
        <View style={styles.get_help}>
          <Image source={IconHelp} />
          <Text style={styles.get_help_text}>Butuh Bantuan?</Text>
        </View>
      </View>
      <View
        style={{
          paddingHorizontal: 24,
          paddingVertical: 16,
          backgroundColor: '#FFFFFF',
          flex: 1,
        }}>
        <View
          style={{
            marginBottom: 12,
            flexDirection: 'row',
            gap: 8,
            justifyContent: 'center',
          }}>
          {paginationBar.map(item => (
            <View
              style={styles.pagination_bar(
                item,
                Number(routeName.split('').pop()),
              )}
              key={item}
            />
          ))}
        </View>
        <>{children}</>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  pagination_bar: (stateActive, navigationProgress): any => ({
    width: getResponsive(16, 'width'),
    height: getResponsive(4, 'height'),
    borderRadius: 8,
    backgroundColor: stateActive === navigationProgress ? '#10A9A5' : '#B5E4E3',
  }),
  get_help: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    backgroundColor: '#E7F6F6',
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 162,
    marginLeft: 'auto',
  },
  get_help_text: {
    fontSize: 14,
    color: '#10A9A5',
    fontWeight: '500',
  },
});

export default FillDataScreenLayout;
