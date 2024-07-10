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
import {Banner, CustomHeaderApp} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {FlatList} from 'react-native-gesture-handler';
import {IconSearch} from '../../assets/images';
import {Dropdown} from 'react-native-element-dropdown';
import FAB from '../../components/FAB';
import SearchIcon from '../../assets/icons/search-icon.svg';
import PlusIcon from '../../assets/icons/plus-icon.svg';
import {BarChart2, LineChart} from 'lucide-react-native';

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
        // rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Cuti'}>
        <Text>Filter Cuti</Text>
      </CustomHeaderApp>
      <FAB />
      <ScrollView style={styles.container}>
        <Text style={{fontWeight: '700'}}>Statistik Cuti</Text>
        <View style={{marginTop: 8, marginBottom: 16}}>
          <View
            style={{
              flexDirection: 'row',
              gap: 7,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <BarChart2 color={'rgb(227, 68, 54)'} fill={'rgb(227, 68, 54)'} />
              <Text style={{marginVertical: 2, fontSize: 14}}>
                Cuti Tahunan
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                4{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  /12
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <BarChart2
                color={'rgb(62, 209, 128)'}
                fill={'rgb(62, 209, 128)'}
              />
              <Text style={{marginVertical: 2, fontSize: 14}} numberOfLines={1}>
                Cuti di Luar Tanggungan
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                5{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  /30 hari
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <BarChart2
                color={'rgb(36, 113, 227)'}
                fill={'rgb(36, 113, 227)'}
              />
              <Text style={{marginVertical: 2, fontSize: 14}}>Cuti Besar</Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                7{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  /12 hari
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <BarChart2
                color={'rgb(255, 206, 103)'}
                fill={'rgb(255, 206, 103)'}
              />
              <Text style={{marginVertical: 2, fontSize: 14}}>
                Cuti Kelahiran
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                0{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  /90 hari
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <LineChart color={'rgb(168, 92, 207)'} />
              <Text style={{marginVertical: 2, fontSize: 14}}>Cuti Sakit</Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                2{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  kali
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                width: '49%',
              }}>
              <LineChart color={'rgb(79, 176, 198)'} />
              <Text style={{marginVertical: 2, fontSize: 14}}>Cuti Nikah</Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                0{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  kali
                </Text>
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 12,
                borderRadius: 12,
                flex: 1,
              }}>
              <LineChart color={'rgb(255, 132, 124)'} />
              <Text style={{marginVertical: 2, fontSize: 14}}>
                Cuti Kematian
              </Text>
              <Text style={{fontSize: 24, fontWeight: '700'}}>
                1{' '}
                <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                  kali
                </Text>
              </Text>
            </View>
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
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
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
      </ScrollView>
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
