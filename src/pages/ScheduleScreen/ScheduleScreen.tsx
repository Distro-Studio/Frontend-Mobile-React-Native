import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp, ScheduleCard} from '../../components';
import {Dropdown} from 'react-native-element-dropdown';

const ScheduleScreen = ({navigation}) => {
  const route = useRoute();
  const [valueMonth, setValueMonth] = React.useState(null);
  const [isFocusMonth, setIsFocusMonth] = React.useState(false);
  const [valueWeeks, setValueWeeks] = React.useState(null);
  const [isFocusWeeks, setIsFocusWeeks] = React.useState(false);
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
  const dataWeeks = [
    {label: 'Minggu 1', value: 'Minggu 1'},
    {label: 'Minggu 2', value: 'Minggu 2'},
    {label: 'Minggu 3', value: 'Minggu 3'},
    {label: 'Minggu 4', value: 'Minggu 4'},
  ];
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  console.log(route);
  return (
    <>
      <CustomHeaderApp
        backButton={false}
        rightIcon={headerIcon()}
        screenName={'Schedule'}>
        <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataMonth}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocusMonth ? 'Select item' : '...'}
            value={dataMonth[0]}
            onFocus={() => setIsFocusMonth(true)}
            onBlur={() => setIsFocusMonth(false)}
            onChange={item => {
              setValueMonth(item.value);
              setIsFocusMonth(false);
            }}
            containerStyle={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          />
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataWeeks}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocusWeeks ? 'Select item' : '...'}
            value={dataWeeks[0]}
            onFocus={() => setIsFocusWeeks(true)}
            onBlur={() => setIsFocusWeeks(false)}
            onChange={item => {
              setValueWeeks(item.value);
              setIsFocusWeeks(false);
            }}
            containerStyle={{
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
            }}
          />
        </View>
      </CustomHeaderApp>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: '#287DFC26',
              padding: 16,
              borderRadius: 8,
              marginBottom: 16,
            }}>
            <Text style={{lineHeight: 20, color: '#222831'}}>
              Just a reminder: HRD updates your work schedule every Week. Keep
              an eye out for the latest changes!!!
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <ScheduleCard
            routeName={route.name}
            cardState={'active'}
            navigation={navigation}
          />
          <ScheduleCard
            routeName={route.name}
            cardState={'active'}
            navigation={navigation}
          />
          <ScheduleCard
            routeName={route.name}
            cardState={'active'}
            navigation={navigation}
          />
          <ScheduleCard
            routeName={route.name}
            cardState={'active'}
            navigation={navigation}
          />
          <ScheduleCard
            routeName={route.name}
            cardState={'active'}
            navigation={navigation}
          />
          <ScheduleCard
            routeName={route.name}
            cardState={'inactive'}
            isHoliday={true}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    fontWeight: '700',
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight: '700',
  },
  dropdown: {
    flex: 1,
    height: 50,
    borderWidth: 0,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  container: {
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
