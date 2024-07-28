import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {useRoute} from '@react-navigation/native';
import {Calendar as CalendarIcon} from 'lucide-react-native';
import React from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {CustomHeaderApp, ScheduleCard} from '../../components';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';
import RangeDatePicker from '../../components/CustomNewDatePicker/RangeDatePicker';

const ScheduleScreen = ({navigation}) => {
  const route = useRoute();
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(160, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);

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
      <CustomHeaderApp screenName={'Jadwal'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => setIsDrawer(!isDrawer)}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            28 Dec 22 - 10 Jan 23
          </Text>
          <CalendarIcon size={16} color={'black'} />
          {/* <Image source={CalendarIcon} style={{width: 20, height: 20}} /> */}
        </Pressable>
      </CustomHeaderApp>
      {/* <View style={styles.container_top}>

      </View> */}

      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#bee3f8',
            padding: 16,
            borderRadius: 8,
            marginBottom: 8,
          }}>
          <Text style={{lineHeight: 20, color: '#222831'}}>
            Sekadar pengingat: HRD memperbarui jadwal kerja Anda setiap Minggu.
            Selalu perhatikan perubahan terbaru!!!
          </Text>
        </View>
        <FlatList
          data={data}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </ScrollView>
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
                Pilih Rentang Tanggal
              </Text>
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
          </View>
        </CustomButtonSheet>
      )}
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
    alignItems: 'center',
    gap: 16,
  },
});

export default ScheduleScreen;
