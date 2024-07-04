import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Banner, CustomHeaderApp} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {FlatList} from 'react-native-gesture-handler';
import {IconSearch} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import FAB from '../../components/FAB';
import SearchIcon from '../../assets/icons/search-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';

const LeavesScreen = () => {
  const [activeMenu, setActiveMenu] = React.useState('Terbaru');
  const menus = ['Terbaru', 'Histori'];
  const leaveBoxes = ['Jumlah Cuti', 'Dalam Proses', 'Disetujui', 'Ditolak'];
  const [isSearch, setIsSearch] = React.useState(false);

  const dataCuti = [
    {label: 'Tahunan', value: 'Tahunan'},
    {label: 'Melahirkan', value: 'Melahirkan'},
    {label: 'Sakit', value: 'Sakit'},
  ];
  const dataFilter = [
    {label: 'Terbaru', value: 'Terbaru'},
    {label: 'Terlama', value: 'Terlama'},
  ];

  const headerIcon = () => {
    return (
      <Pressable onPress={() => setIsSearch(true)}>
        <SearchIcon />
        {/* <Image source={IconSearch} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };

  const SearchForm = React.useCallback(() => {
    return (
      <View
        style={{
          flex: 1,
          borderColor: '#E3E3E3',
          borderWidth: 1,
          borderRadius: 8,
          paddingVertical: 0,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          gap: 4,
        }}>
        <SearchIcon style={{width: 20, height: 20}} />
        <TextInput
          placeholder="Search"
          style={{
            width: '100%',
            paddingVertical: 6,
          }}
        />
      </View>
    );
  }, []);

  return (
    <>
      <CustomHeaderApp
        backButton={!isSearch ? true : false}
        rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Cuti'}>
        <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataCuti}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Jenis Cuti"
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
        </View>
      </CustomHeaderApp>
      <FAB />
      <View style={styles.container}>
        <View
          style={{
            height: 235,
            backgroundColor: '#FFFFFF',
            marginBottom: 24,
            borderRadius: 16,
          }}>
          <Text style={{color: 'black'}}>Pie Chart</Text>
        </View>
        {/* <View style={{marginBottom: 24}}>
          <FlatList
            data={leaveBoxes}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={{gap: 16}}
            columnWrapperStyle={{gap: 16}}
            renderItem={({item}) => (
              <View key={item} style={styles.leave_box(item)}>
                <Text
                  style={{color: '#000000', fontWeight: '500', fontSize: 14}}>
                  {item}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: '500',
                    fontSize: 14,
                    marginTop: 8,
                  }}>
                  1
                </Text>
              </View>
            )}
          />
        </View>
        <Banner
          headerText={
            'Perlukan Cuti? Ajukan Sekarang untuk Waktu Luang yang Nyaman!'
          }
          buttonText={'Ajukan Cuti'}
        />
        <View style={styles.menu_container}>
          {menus.map(item => (
            <Pressable
              key={item}
              style={[styles.menu_button(activeMenu, item)]}
              onPress={() => setActiveMenu(item)}>
              <Text
                style={{
                  textAlign: 'center',
                  color: activeMenu === item ? '#FFFFFF' : '#0C0E11',
                }}>
                {item}
              </Text>
            </Pressable>
          ))}
        </View> */}
        {/*  */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          contentContainerStyle={{gap: 16}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View key={item} style={styles.leave_card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: '#222831'}}>Tanggal</Text>
                <Text
                  style={{
                    color:
                      item === 1
                        ? '#FC4C3C'
                        : item % 2 === 0
                        ? '#45E88E'
                        : '#FFCE30',
                  }}>
                  {item === 1
                    ? 'Ditolak'
                    : item % 2 === 0
                    ? 'Disetujui'
                    : 'Dalam Proses'}
                </Text>
              </View>
              <Text
                style={{
                  color: '#222831',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 4,
                  marginBottom: 8,
                }}>
                06 Dec 2023 - 09 Dec 2023
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831'}}>Total Cuti</Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '700',
                      fontSize: 14,
                      marginTop: 4,
                      marginBottom: 8,
                    }}>
                    3 Hari
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831'}}>Disetujui Oleh</Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '700',
                      fontSize: 14,
                      marginTop: 4,
                      marginBottom: 8,
                    }}>
                    {item === 1 ? 'Joshua' : item % 2 === 0 ? 'Joshua' : '-'}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
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
  leave_box: (menu): any => ({
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    flex: 2,
    borderColor:
      menu === 'Jumlah Cuti'
        ? '#10A9A5'
        : menu === 'Dalam Proses'
        ? '#E6B92B'
        : menu === 'Disetujui'
        ? '#45E88E'
        : '#FC4C3C',
    backgroundColor:
      menu === 'Jumlah Cuti'
        ? '#E7F6F6'
        : menu === 'Dalam Proses'
        ? '#FFFAEA'
        : menu === 'Disetujui'
        ? '#ECFDF4'
        : '#FFEDEC',
  }),
  menu_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 16,
  },
  menu_button: (active, menu): any => ({
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: active === menu ? APP.COLORS['primary-500'] : '#F5F5F5',
    flex: 1,
    borderRadius: 8,
    gap: 8,
  }),
  leave_card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
  },
});

export default LeavesScreen;
