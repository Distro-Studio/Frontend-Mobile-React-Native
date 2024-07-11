import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import {Banner, CustomHeaderApp} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {IconSearch} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import FAB from '../../components/FAB';
import SearchIcon from '../../assets/icons/search-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {Settings2} from 'lucide-react-native';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';

const GantiJadwalScreen = ({navigation}) => {
  const [activeMenu, setActiveMenu] = React.useState('Upcoming');
  const menus = ['Upcoming', 'Past', 'Requested'];
  const [isSearch, setIsSearch] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(350, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const dataTukar = [
    {label: 'Menunggu', value: 'Menunggu'},
    {label: 'Disetujui', value: 'Disetujui'},
    {label: 'Ditolak', value: 'Ditolak'},
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
        // rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Pengajuan Tukar Jadwal'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => setIsDrawer(!isDrawer)}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Filter Tukar Jadwal
          </Text>
          <Settings2 color={'black'} size={16} />
        </Pressable>
        {/* <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataTukar}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Semua Proses"
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
      {!isDrawer && <FAB />}
      <View style={styles.container}>
        {/* <Banner
          headerText={'Fleksibilitas di Tanganmu! Tukar Jadwal dengan Mudah!'}
          buttonText={'Tukar Sekarang'}
          onPress={() => navigation.navigate('GantiJadwalPilihKaryawan')}
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
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          contentContainerStyle={{gap: 16}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              key={item}
              style={styles.leave_card}
              onPress={() => navigation.navigate('GantiJadwalDetailScreen')}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: '#222831', opacity: 0.4, fontSize: 12}}>
                    Jenis Penukaran
                  </Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '700',
                      fontSize: 14,
                      marginTop: 4,
                      marginBottom: 8,
                    }}>
                    Tukar Shift
                  </Text>
                </View>
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
                  opacity: 0.4,
                  fontSize: 12,
                  marginTop: 4,
                }}>
                Tanggal Pengajuan
              </Text>
              <Text
                style={{
                  color: '#222831',
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 4,
                  marginBottom: 8,
                }}>
                06 Dec 2023
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831', opacity: 0.4, fontSize: 12}}>
                    Karyawan Ditukar
                  </Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '700',
                      fontSize: 14,
                      marginTop: 4,
                      marginBottom: 8,
                    }}>
                    Alexandro
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831', opacity: 0.4, fontSize: 12}}>
                    Disetujui Oleh
                  </Text>
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
            </Pressable>
          )}
        />
      </View>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <Text style={{color: 'black'}}>Drawer Swap</Text>
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  },
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

export default GantiJadwalScreen;
