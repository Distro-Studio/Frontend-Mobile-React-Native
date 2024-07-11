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
import {Dropdown} from 'react-native-element-dropdown';
// import {IconSearch} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard} from '../../components';
import {dummyEmployee} from '../../utils/CONSTANT';
import SearchIcon from '../../assets/icons/search-icon.svg';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {CalendarIcon, Search, Settings2} from 'lucide-react-native';

const EmployeeScreen = ({navigation}: any) => {
  const [valueWeeks, setValueWeeks] = React.useState<string | null>(null);
  const [isFocusWeeks, setIsFocusWeeks] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(350, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const dataStatus = [
    {label: 'Kerja', value: 'Kerja'},
    {label: 'Cuti', value: 'Cuti'},
    {label: 'Libur', value: 'Libur'},
  ];
  const headerIcon = () => {
    return (
      <Pressable onPress={() => setIsSearch(true)}>
        <Search size={20} color={'black'} />
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
        <Search size={20} color={'black'} />
        <TextInput
          placeholder="Search"
          style={{
            width: '100%',
            paddingVertical: 2,
            color: 'black',
          }}
        />
      </View>
    );
  }, []);
  return (
    <>
      <CustomHeaderApp
        backButton={isSearch ? true : false}
        rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Karyawan'}>
        <Pressable
          style={[styles.header_dropdown_menu]}
          onPress={() => setIsDrawer(!isDrawer)}>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Filter Karyawan
          </Text>
          <Settings2 color={'black'} size={16} />
        </Pressable>
        {/* <View style={styles.header_dropdown_menu}>
          <Dropdown
            style={[styles.dropdown]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dataStatus}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={'Semua Status'}
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
            itemTextStyle={{color: '#454545'}}
          />
        </View> */}
      </CustomHeaderApp>

      <View style={styles.container}>
        <FlatList
          data={dummyEmployee}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <EmployeeCard
                key={item}
                navigation={navigation}
                name={item.name}
                role={item.role}
                status={item.state}
                onPress={() => navigation.navigate('DetailEmployeeScreen')}
              />
            </View>
          )}
        />
      </View>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <Text style={{color: 'black'}}>Drawer Employee</Text>
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16,
  },
});

export default EmployeeScreen;
