import {View, Text, Pressable, Image, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {CustomHeaderApp, EmployeeCard} from '../../../components';
import {IconSearch} from '../../../assets/images';
import {dummyEmployee} from '../../../utils/CONSTANT';
import SearchIcon from '../../../assets/icons/search-icon.svg';

const GantiJadwalPilihKaryawan = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <SearchIcon />
        {/* <Image source={IconSearch} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Pilih Karyawan'}
        rightIcon={headerIcon()}
      />
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
                onPress={() =>
                  navigation.navigate('GantiJadwalPilihJadwalKaryawan')
                }
              />
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
});

export default GantiJadwalPilihKaryawan;
