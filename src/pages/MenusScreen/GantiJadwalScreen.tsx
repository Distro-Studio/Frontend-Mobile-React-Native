import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {ArrowDown, ArrowUp, Settings2} from 'lucide-react-native';
import React from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {CustomHeaderApp, Input} from '../../components';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import FAB from '../../components/FAB';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';
import RangeDatePicker from '../../components/CustomNewDatePicker/RangeDatePicker';

const GantiJadwalScreen = ({navigation}) => {
  const [isDrawer, setIsDrawer] = React.useState(false);
  const [goSwap, setGoSwap] = React.useState(false);
  const [isRangeDatePicker, setIsRangeDatePicker] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(160, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);
  // ref
  const bottomSheetDatePickerRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChangesDatePicker = React.useCallback((index: number) => {
    setIsRangeDatePicker(index === -1 ? false : true);
  }, []);

  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Pengajuan Tukar Jadwal'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => {
            setGoSwap(false);
            setIsDrawer(!isDrawer);
          }}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Filter Tukar Jadwal
          </Text>
          <Settings2 color={'black'} size={16} />
        </Pressable>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            gap: 8,
            // justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 8,
            }}>
            <ArrowUp color={'black'} size={16} />
            <Text style={{color: 'black'}}>Pengajuan</Text>
          </View>
          <View
            style={{
              width: '50%',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              padding: 8,
              borderRadius: 8,
            }}>
            <ArrowDown color={'black'} size={16} />
            <Text style={{color: 'black'}}>Permintaan</Text>
          </View>
        </View>
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
      {!isDrawer && (
        <FAB
          onPressFunc={() => {
            setIsDrawer(true);
            setGoSwap(true);
          }}
        />
      )}
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
          {!goSwap && (
            <View
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Filter Aktivitas
                </Text>
                <Pressable
                  onPress={() => setIsRangeDatePicker(true)}
                  style={{marginTop: 16}}>
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
                  Jenis Penukaran
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={[
                    {label: 'Tukar Shift', value: 'Tukar Shift'},
                    {label: 'Tukar Libur', value: 'Tukar Libur'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Pilih Jenis Penukaran"
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
                  Status Penukaran
                </Text>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  data={[
                    {label: 'Menunggu', value: 'Menunggu'},
                    {label: 'Disetujui', value: 'Disetujui'},
                    {label: 'Tidak Disetujui', value: 'Tidak Disetujui'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Pilih Status Penukaran"
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
          {goSwap && (
            <View
              style={{
                paddingHorizontal: 24,
                paddingVertical: 8,
              }}>
              <View>
                <Text
                  style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                  Ajukan Tukar Jadwal
                </Text>
              </View>
              <View
                style={{
                  marginTop: 16,
                  backgroundColor: '#bee3f8',
                  padding: 8,
                  borderRadius: 8,
                }}>
                <Text style={{fontWeight: 'bold', color: 'black'}}>
                  Peraturan Tukar Jadwal
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  <Text style={{fontWeight: 'bold'}}>
                    Tukar jadwal shift
                  </Text>{' '}
                  hanya boleh dilakukan pada tanggal masuk yang sama.
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  <Text style={{fontWeight: 'bold'}}>Tukar libur</Text> boleh di
                  tanggal yang berbeda dengan saling menukar jadwal shift pada
                  tanggal libur yang ditukar, jadi terdapat 2 jadwal.
                </Text>
                <Text
                  style={{fontWeight: 'bold', color: 'black', marginTop: 8}}>
                  Langkah-langkah tukar jadwal
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  Pilih Karyawan dari menu karyawan.
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  Pilih Karyawan yang ingin ditukar, lalu klik Tukar.
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  Pilih jadwal Anda yang valid untuk ditukar. Jika tidak valid,
                  maka Anda tidak akan bisa melakukan penukaran jadwal.
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  Konfirmasi penukaran jadwal.
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  {'\u2022 '}
                  Pengajuan ini harus disetujui terlebih dahulu oleh karyawan
                  yang bersangkutan, kemudian oleh kepala ruang. Setelah itu,
                  status pengajuan akan berubah menjadi Disetujui.
                </Text>
              </View>
              <View style={{marginTop: 24}}>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Karyawan');
                  }}
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
                    Lanjutkan
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </CustomButtonSheet>
      )}
      {isRangeDatePicker && (
        <CustomButtonSheet
          sheetRef={bottomSheetDatePickerRef}
          handleSheetChanges={handleSheetChangesDatePicker}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}>
            <RangeDatePicker />
            <Pressable
              style={{
                backgroundColor: APP.COLORS['primary-500'],
                flex: 1,
                padding: 8,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 24,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                }}>
                Konfirmasi
              </Text>
            </Pressable>
          </View>
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
