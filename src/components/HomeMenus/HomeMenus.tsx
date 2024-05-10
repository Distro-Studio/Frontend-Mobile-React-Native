import {View, Text, Image, StyleSheet, FlatList, Pressable} from 'react-native';
import React from 'react';
import {
  IconCuti,
  IconDokumen,
  IconIjin,
  IconKoperasi,
  IconLaporan,
  IconLembur,
  IconSlipGaji,
  IconTukarJadwal,
} from '../../assets/images';
import {APP} from '../../utils/CONSTANT';
import {getResponsive} from '../../utils';
import {useNavigation} from '@react-navigation/native';

const HomeMenus = () => {
  const menus = [
    {
      id: 1,
      name: 'Cuti',
      iconSource: IconCuti,
      route: 'CutiScreen',
    },
    {
      id: 2,
      name: 'Tukar Jadwal',
      iconSource: IconTukarJadwal,
      route: 'GantiJadwalScreen',
    },
    {
      id: 3,
      name: 'Lembur',
      iconSource: IconLembur,
      route: 'LemburScreen',
    },
    {
      id: 4,
      name: 'Ijin',
      iconSource: IconIjin,
      route: 'IjinScreen',
    },
    {
      id: 5,
      name: 'Slip Gajiku',
      iconSource: IconSlipGaji,
      route: 'SlipGajiScreen',
    },
    {
      id: 6,
      name: 'Dokumen',
      iconSource: IconDokumen,
      route: 'DokumenScreen',
    },
    {
      id: 7,
      name: 'Koperasi',
      iconSource: IconKoperasi,
      route: 'KoperasiScreen',
    },
    {
      id: 8,
      name: 'Laporan',
      iconSource: IconLaporan,
      route: 'LaporanScreen',
    },
  ];

  const navigation = useNavigation();

  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            // gap: getResponsive(8, 'width'),
            flex: 4,
            marginHorizontal: 'auto',
            marginTop: 24,
            // width: getResponsive(300, 'width'),
          }}>
          <FlatList
            data={menus}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({item}) => (
              <Pressable
                key={item.id}
                style={[styles.home_menu]}
                onPress={() => navigation.navigate(item.route)}>
                <Image
                  source={item.iconSource}
                  width={getResponsive(28, 'width')}
                  height={getResponsive(28, 'height')}
                />
                <Text style={styles.home_menu_text}>{item.name}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
      {/* <View style={styles.menu_pagination_container}>
        <View style={styles.menu_pagination_active} />
        <View style={styles.menu_pagination} />
      </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  menu_pagination_container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },
  menu_pagination: {
    width: 6,
    height: 6,
    borderRadius: 12,
    backgroundColor: '#FFE7D9',
  },
  menu_pagination_active: {
    width: 24,
    height: 6,
    borderRadius: 12,
    backgroundColor: APP.COLORS['primary-500'],
  },
  home_menus: {
    justifyContent: 'space-between',
    width: getResponsive(350, 'width'),
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 24,
    backgroundColor: 'red',
  },
  home_menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: getResponsive(8, 'width'),
    paddingVertical: getResponsive(8, 'height'),
    // width: getResponsive(73, 'width'),
    height: getResponsive(80, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2,
  },
  home_menu_text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#222831',
  },
});

export default HomeMenus;
