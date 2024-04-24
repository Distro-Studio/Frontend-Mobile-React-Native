import {View, Text, Image, StyleSheet} from 'react-native';
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

const HomeMenus = () => {
  const menus = [
    {
      id: 1,
      name: 'Cuti',
      iconSource: IconCuti,
    },
    {
      id: 2,
      name: 'Tukar Jadwal',
      iconSource: IconTukarJadwal,
    },
    {
      id: 3,
      name: 'Lembur',
      iconSource: IconLembur,
    },
    {
      id: 4,
      name: 'Ijin',
      iconSource: IconIjin,
    },
    {
      id: 5,
      name: 'Slip Gajiku',
      iconSource: IconSlipGaji,
    },
    {
      id: 6,
      name: 'Dokumen',
      iconSource: IconDokumen,
    },
    {
      id: 7,
      name: 'Koperasi',
      iconSource: IconKoperasi,
    },
    {
      id: 8,
      name: 'Laporan',
      iconSource: IconLaporan,
    },
  ];

  return (
    <>
      <View style={styles.home_menus}>
        {menus.map(item => (
          <View key={item.id} style={styles.home_menu}>
            <Image source={item.iconSource} />
            <Text style={styles.home_menu_text}>{item.name}</Text>
          </View>
        ))}
      </View>
      <View style={styles.menu_pagination_container}>
        <View style={styles.menu_pagination_active} />
        <View style={styles.menu_pagination} />
      </View>
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
    flex: 4,
    width: 360,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 24,
  },
  home_menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    width: 73.5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  home_menu_text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#222831',
  },
});

export default HomeMenus;
