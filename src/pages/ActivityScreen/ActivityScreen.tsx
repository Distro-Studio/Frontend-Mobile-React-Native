import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {IconNotificationBlack} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import {FlatList} from 'react-native-gesture-handler';
import ActivityCard from '../../components/ActivityCard';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';

const ActivityScreen = () => {
  const data = [
    {
      id: 1,
      type: 'in',
      date: '01 November 2023',
      time: '07.30',
    },
    {
      id: 2,
      type: 'out',
      date: '01 November 2023',
      time: '16.30',
    },
  ];
  const dataMonth = [
    {label: 'Januari', value: 'Januari'},
    {label: 'Februari', value: 'Februari'},
    {label: 'Maret', value: 'Maret'},
    {label: 'April', value: 'April'},
    {label: 'Mei', value: 'Mei'},
    {label: 'Juni', value: 'Juni'},
    {label: 'Juli', value: 'Juli'},
    {label: 'Agustus', value: 'Agustus'},
    {label: 'September', value: 'September'},
    {label: 'Oktober', value: 'Oktober'},
    {label: 'November', value: 'November'},
    {label: 'Desember', value: 'Desember'},
  ];
  const dataFilter = [
    {label: 'Terbaru', value: 'Terbaru'},
    {label: 'Terlama', value: 'Terlama'},
  ];
  const headerIcon = () => {
    return (
      <Pressable>
        <NotifyBlack />
        {/* <Image source={IconNotificationBlack} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  function renderItem({item}: any) {
    return <ActivityCard item={item} />;
  }
  return (
    <>
      <CustomHeaderApp
        backButton={false}
        screenName={'Aktivitas'}
        // rightIcon={headerIcon()}
      >
        {/* <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataMonth}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Bulan"
            // placeholder={!isFocusMonth ? 'Select item' : '...'}
            // value={dataMonth[0]}
            // onFocus={() => setIsFocusMonth(true)}
            // onBlur={() => setIsFocusMonth(false)}
            // onChange={item => {
            //   setValueMonth(item.value);
            //   setIsFocusMonth(false);
            // }}
            containerStyle={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
            itemTextStyle={{color: '#454545'}}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataFilter}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Urutkan"
            // placeholder={!isFocusWeeks ? 'Select item' : '...'}
            // value={dataWeeks[0]}
            // onFocus={() => setIsFocusWeeks(true)}
            // onBlur={() => setIsFocusWeeks(false)}
            // onChange={item => {
            //   setValueWeeks(item.value);
            //   setIsFocusWeeks(false);
            // }}
            containerStyle={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
            itemTextStyle={{color: '#454545'}}
          />
        </View> */}
      </CustomHeaderApp>
      <View style={styles.container}>
        <View style={{marginBottom: 16}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            November
          </Text>
          <FlatList data={data} renderItem={renderItem} />
        </View>
        <View style={{marginBottom: 16}}>
          <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
            Desember
          </Text>
          <FlatList data={data} renderItem={renderItem} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C0E11',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C0E11',
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    paddingBottom: 12,
  },
});

export default ActivityScreen;
