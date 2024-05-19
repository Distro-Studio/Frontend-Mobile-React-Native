import {View, Text, Image, Pressable, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {CustomHeaderApp, EmployeeCard, ScheduleCard} from '../../../components';
import {IconSearch} from '../../../assets/images';

const GantiJadwalPilihKaryawan = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconSearch} style={{width: 20, height: 20}} />
      </Pressable>
    );
  };

  function renderItem({item}) {
    return (
      <View style={{marginTop: 16}}>
        <ScheduleCard
          routeName={item.routeName}
          navigation={item.navigation}
          isHoliday={item.isHoliday}
          onPress={() => navigation.navigate('GantiJadwalPilihJadwalUser')}
          // cardState={item.cardState}
        />
      </View>
    );
  }

  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Pilih Jadwal Karyawan'}
        rightIcon={headerIcon()}
      />
      <View style={styles.containerEmployee}>
        <EmployeeCard name={'Albert Flores'} role={'UI/UX Designer'} />
      </View>
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4]}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerEmployee: {
    marginTop: -24,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 24,
  },
});

export default GantiJadwalPilihKaryawan;
