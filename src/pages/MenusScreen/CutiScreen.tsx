import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {FlatList} from 'react-native-gesture-handler';

const LeavesScreen = () => {
  const [activeMenu, setActiveMenu] = React.useState('Terbaru');
  const menus = ['Terbaru', 'Histori'];
  const leaveBoxes = ['Jumlah Cuti', 'Dalam Proses', 'Disetujui', 'Ditolak'];
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Cuti'} />
      {/*  */}
      <View style={styles.container}>
        <View>
          <FlatList
            data={leaveBoxes}
            numColumns={2}
            scrollEnabled={false}
            contentContainerStyle={{gap: 16}}
            columnWrapperStyle={{gap: 16}}
            renderItem={({item}) => (
              <View style={styles.leave_box(item)}>
                <Text
                  style={{color: '#000000', fontWeight: '500', fontSize: 14}}>
                  {item}
                </Text>
                <Text
                  style={{
                    color: '#000000',
                    fontWeight: '500',
                    fontSize: 14,
                    marginTop: 8,
                  }}>
                  1
                </Text>
              </View>
            )}
          />
        </View>
        {/*  */}
        <View style={styles.menu_container}>
          {menus.map(item => (
            <Pressable
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
        {/*  */}
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <View style={styles.leave_card}>
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
                  fontWeight: '600',
                  fontSize: 14,
                  marginTop: 4,
                  marginBottom: 8,
                }}>
                06 Dec 2023 - 09 Dec 2023
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flex: 1}}>
                  <Text style={{color: '#222831'}}>Total Cuti</Text>
                  <Text
                    style={{
                      color: '#222831',
                      fontWeight: '600',
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
                      fontWeight: '600',
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
