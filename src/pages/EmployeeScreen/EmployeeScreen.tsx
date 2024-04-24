import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconSearch} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard} from '../../components';
import {Dropdown} from 'react-native-element-dropdown';

const EmployeeScreen = ({navigation}) => {
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
        <Image source={IconSearch} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={false}
        rightIcon={headerIcon()}
        screenName={'Employee'}>
        <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataMonth}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'All Teams'}
            searchPlaceholder="Search..."
            value={valueMonth}
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
            placeholder={'All Status'}
            searchPlaceholder="Search..."
            value={valueWeeks}
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

      <View style={styles.container}>
        <FlatList
          data={[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <EmployeeCard key={item} navigation={navigation} />
            </View>
          )}
        />
      </View>
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
    flex: 1,
  },
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default EmployeeScreen;
