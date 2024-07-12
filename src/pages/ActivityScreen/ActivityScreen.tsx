import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp, Input} from '../../components';
import {IconNotificationBlack} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import {FlatList} from 'react-native-gesture-handler';
import ActivityCard from '../../components/ActivityCard';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {Settings2} from 'lucide-react-native';
import {APP} from '../../utils/CONSTANT';

const ActivityScreen = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(350, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

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
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => setIsDrawer(!isDrawer)}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Filter Aktivitas
          </Text>
          <Settings2 color={'black'} size={16} />
          {/* <Image source={CalendarIcon} style={{width: 20, height: 20}} /> */}
        </Pressable>
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
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}>
            <View>
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                Filter Aktivitas
              </Text>
              <Pressable style={{marginVertical: 16}}>
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
                Jenis Aktivitas
              </Text>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                data={[
                  {label: 'Masuk', value: 'Masuk'},
                  {label: 'Keluar', value: 'Keluar'},
                ]}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Pilih Jenis Aktivitas"
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
    color: '#181818',
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
    paddingBottom: 12,
  },
});

export default ActivityScreen;
