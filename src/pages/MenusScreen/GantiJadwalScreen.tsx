import {View, Text, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import React from 'react';
import {Banner, CustomHeaderApp} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {IconSearch} from '../../assets/images';

const GantiJadwalScreen = ({navigation}) => {
  const [activeMenu, setActiveMenu] = React.useState('Upcoming');
  const menus = ['Upcoming', 'Past', 'Requested'];

  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconSearch} style={{width: 20, height: 20}} />
      </Pressable>
    );
  };

  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Tukar Jadwal'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <Banner
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
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          contentContainerStyle={{gap: 16}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View key={item} style={styles.leave_card}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
                06 Dec 2023
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831'}}>Nama</Text>
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
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
