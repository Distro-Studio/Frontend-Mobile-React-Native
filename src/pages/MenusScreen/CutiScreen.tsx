import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Banner, CustomHeaderApp, Input} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {FlatList} from 'react-native-gesture-handler';
import {IconSearch} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import FAB from '../../components/FAB';
import SearchIcon from '../../assets/icons/search-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import {BarChart2, LineChart, Settings2} from 'lucide-react-native';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {getResponsive} from '../../utils';

const LeavesScreen = () => {
  const [activeMenu, setActiveMenu] = React.useState('Terbaru');
  const menus = ['Terbaru', 'Histori'];
  const leaveBoxes = ['Jumlah Cuti', 'Dalam Proses', 'Disetujui', 'Ditolak'];
  const [isSearch, setIsSearch] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const [goLeave, setGoLeave] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(250, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);

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
        // rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Cuti'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => {
            setIsDrawer(!isDrawer);
            setGoLeave(false);
          }}>
          <Text style={{color: 'black', fontWeight: '600'}}>Filter Cuti</Text>
          <Settings2 color={'black'} size={16} />
        </Pressable>
      </CustomHeaderApp>
      {!isDrawer && (
        <FAB
          onPressFunc={() => {
            setIsDrawer(true);
            setGoLeave(true);
          }}
        />
      )}
      <ScrollView style={styles.container}>
        <Text style={{fontWeight: '700', color: 'black'}}>Statistik Cuti</Text>
        <View style={{marginTop: 8, marginBottom: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <BarChart2 color={'rgb(227, 68, 54)'} fill={'rgb(227, 68, 54)'} />
              <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti Tahunan
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                4{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  /12
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <BarChart2
                color={'rgb(62, 209, 128)'}
                fill={'rgb(62, 209, 128)'}
              />
              <Text
                numberOfLines={1}
                style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti di Luar Tanggungan
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                5{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  /30 hari
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <BarChart2
                color={'rgb(36, 113, 227)'}
                fill={'rgb(36, 113, 227)'}
              />
              <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti Besar
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                7{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  /12 hari
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <BarChart2
                color={'rgb(255, 206, 103)'}
                fill={'rgb(255, 206, 103)'}
              />
              <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti Kelahiran
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                0{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  /90 hari
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <LineChart color={'rgb(168, 92, 207)'} />
              <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti Sakit
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                2{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  kali
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '48%',
              }}>
              <LineChart color={'rgb(79, 176, 198)'} />
              <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
                Cuti Nikah
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
                0{' '}
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '400',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  kali
                </Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 12,
              borderRadius: 12,
              flex: 1,
              marginTop: 12,
            }}>
            <LineChart color={'rgb(255, 132, 124)'} />
            <Text style={{marginTop: 10, fontSize: 14, color: 'black'}}>
              Cuti Kematian
            </Text>
            <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
              1{' '}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  opacity: 0.4,
                  color: 'black',
                }}>
                kali
              </Text>
            </Text>
          </View>
        </View>
        {/*  */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          contentContainerStyle={{gap: 16}}
          // showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          renderItem={({item}) => (
            <View key={item} style={styles.leave_card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{color: 'black', opacity: 0.4, fontSize: 12}}>
                    Kategori Cuti
                  </Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '600',
                      fontSize: 14,
                      marginTop: 4,
                      marginBottom: 8,
                    }}>
                    Pribadi
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
                Tanggal
              </Text>
              <Text
                style={{
                  color: '#222831',
                  fontWeight: '600',
                  fontSize: 14,
                  marginTop: 4,
                  marginBottom: 8,
                }}>
                06 Dec 2023 - 09 Dec 2023
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831', opacity: 0.4, fontSize: 12}}>
                    Total Cuti
                  </Text>
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
            </View>
          )}
        />
      </ScrollView>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          {!goLeave && (
            <View
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Filter Cuti
                </Text>
                <Pressable style={{marginTop: 16}}>
                  <Input
                    name="Rentang Tanggal"
                    placeholder="Pilih Tanggal"
                    editable={false}
                  />
                </Pressable>
                <Text
                  style={{
                    color: '#222831',
                    fontWeight: '500',
                    marginVertical: 16,
                  }}>
                  Status Kerja
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={[
                    {label: 'Kerja', value: 'Kerja'},
                    {label: 'Cuti', value: 'Cuti'},
                    {label: 'Izin', value: 'Izin'},
                    {label: 'Libur', value: 'Libur'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Pilih Status Kerja"
                  // placeholder={!isFocusMonth ? 'Select item' : '...'}
                  // value={dataMonth[0]}
                  // onFocus={() => setIsFocusMonth(true)}
                  // onBlur={() => setIsFocusMonth(false)}
                  onChange={() => {}}
                  containerStyle={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                  itemTextStyle={{color: '#454545'}}
                />
                <Text
                  style={{
                    color: '#222831',
                    fontWeight: '500',
                    marginVertical: 16,
                  }}>
                  Jenis Karyawan
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={[
                    {label: 'Shift', value: 'Shift'},
                    {label: 'Non Shift', value: 'Non Shift'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Pilih Jenis Karyawan"
                  // placeholder={!isFocusMonth ? 'Select item' : '...'}
                  // value={dataMonth[0]}
                  // onFocus={() => setIsFocusMonth(true)}
                  // onBlur={() => setIsFocusMonth(false)}
                  onChange={() => {}}
                  containerStyle={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                  itemTextStyle={{color: '#454545'}}
                />
              </View>
              <View style={{marginTop: 24}}>
                <Pressable
                  style={{
                    backgroundColor: APP.COLORS['primary-500'],
                    flex: 1,
                    padding: 12,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontWeight: '700',
                    }}>
                    Konfirmasi
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
          {goLeave && (
            <View
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Ajukan Cuti
                </Text>
                <Pressable style={{marginTop: 16}}>
                  <Input
                    name="Rentang Tanggal"
                    placeholder="Pilih Tanggal"
                    editable={false}
                  />
                </Pressable>
                <Text
                  style={{
                    color: '#222831',
                    fontWeight: '500',
                    marginVertical: 16,
                  }}>
                  Jenis Cuti
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={[
                    {label: 'Cuti Tahunan', value: 'Cuti Tahunan'},
                    {
                      label: 'Cuti di Luar Tanggungan',
                      value: 'Cuti di Luar Tanggungan',
                    },
                    {label: 'Cuti Besar', value: 'Cuti Besar'},
                    {label: 'Cuti Kelahiran', value: 'Cuti Kelahiran'},
                    {label: 'Cuti Sakit', value: 'Cuti Sakit'},
                    {label: 'Cuti Nikah', value: 'Cuti Nikah'},
                    {label: 'Cuti Kematian', value: 'Cuti Kematian'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Pilih Jenis Karyawan"
                  // placeholder={!isFocusMonth ? 'Select item' : '...'}
                  // value={dataMonth[0]}
                  // onFocus={() => setIsFocusMonth(true)}
                  // onBlur={() => setIsFocusMonth(false)}
                  onChange={() => {}}
                  containerStyle={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                  itemTextStyle={{color: '#454545'}}
                />
              </View>
              <View style={{marginTop: 24}}>
                <Pressable
                  style={{
                    backgroundColor: APP.COLORS['primary-500'],
                    flex: 1,
                    padding: 12,
                    borderRadius: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: '#FFFFFF',
                      fontWeight: '700',
                    }}>
                    Konfirmasi
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
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
    fontWeight: '400',
    color: '#C5C5C5',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C0E11',
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    borderColor: '#ECECEC',
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
