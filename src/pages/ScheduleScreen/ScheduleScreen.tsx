import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {CustomHeaderApp, ScheduleCard} from '../../components';
import CalendarIcon from '../../assets/icons/calendar-icon.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';

const ScheduleScreen = ({navigation}) => {
  const route = useRoute();

  const headerIcon = () => {
    return (
      <Pressable>
        <SearchIcon />
        {/* <Image source={IconSearch} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  const data = [
    {
      id: 1,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 2,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 3,
      isHoliday: true,
      routeName: route.name,
      navigation: navigation,
      cardState: 'inactive',
    },
    {
      id: 4,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 5,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 6,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 7,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 8,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
    {
      id: 9,
      isHoliday: true,
      routeName: route.name,
      navigation: navigation,
      cardState: 'inactive',
    },
    {
      id: 10,
      isHoliday: false,
      routeName: route.name,
      navigation: navigation,
      cardState: 'active',
    },
  ];
  function renderItem({item}) {
    return (
      <View style={{marginTop: 16}}>
        <ScheduleCard
          routeName={item.routeName}
          navigation={item.navigation}
          isHoliday={item.isHoliday}
          onPress={() => navigation.navigate('DetailScheduleScreen')}
          // cardState={item.cardState}
        />
      </View>
    );
  }
  return (
    <>
      <CustomHeaderApp
        backButton={false}
        rightIcon={headerIcon()}
        screenName={'Jadwal'}>
        <View style={styles.header_dropdown_menu}>
          <Text style={{color: 'black'}}>28 Dec 22 - 10 Jan 23</Text>
          <CalendarIcon />
          {/* <Image source={CalendarIcon} style={{width: 20, height: 20}} /> */}
        </View>
      </CustomHeaderApp>
      <View style={styles.container_top}>
        <View
          style={{
            backgroundColor: '#287DFC26',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
          }}>
          <Text style={{lineHeight: 20, color: '#222831'}}>
            Just a reminder: HRD updates your work schedule every Week. Keep an
            eye out for the latest changes!!!
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0C0E11',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0C0E11',
  },
  dropdown: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  container_top: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 16,
  },
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
});

export default ScheduleScreen;
