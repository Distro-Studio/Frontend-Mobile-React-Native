import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomHeaderApp, ScheduleCard} from '../../components';
import CalendarIcon from '../../assets/icons/calendar-icon.svg';
import SearchIcon from '../../assets/icons/search-icon.svg';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import {Calendar} from 'lucide-react-native';

const ScheduleScreen = ({navigation}) => {
  const route = useRoute();
  const [isSearch, setIsSearch] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(350, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
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

  const headerIcon = () => {
    return (
      <Pressable onPress={() => setIsSearch(true)}>
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
        backButton={isSearch ? true : false}
        // rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Jadwal'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => setIsDrawer(!isDrawer)}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            28 Dec 22 - 10 Jan 23
          </Text>
          <Calendar size={16} color={'black'} />
          {/* <Image source={CalendarIcon} style={{width: 20, height: 20}} /> */}
        </Pressable>
      </CustomHeaderApp>
      {/* <View style={styles.container_top}>

      </View> */}

      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#287DFC26',
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
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <Text style={{color: 'black'}}>Drawer Schedule</Text>
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
