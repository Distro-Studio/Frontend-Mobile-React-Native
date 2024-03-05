import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {IconAttendance, IconLocation} from '../../assets/images';
import {useNavigation} from '@react-navigation/native';

const HeaderAttendance = () => {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('MapsScreen' as never);
  }

  return (
    <View style={styles.header_attendance_container}>
      <Text style={styles.header_attendance_time}>07.40</Text>
      <Text style={styles.header_attendance_date}>Senin, 04 Maret 2024</Text>
      <Pressable style={styles.header_attendance} onPress={handleNavigation}>
        <Image source={IconAttendance} style={{marginBottom: 8}} />
        <Text style={{color: '#0C0E11', fontWeight: '700'}}>Masuk</Text>
      </Pressable>
      <View style={styles.header_location_container}>
        <Image source={IconLocation} />
        <Text style={{color: '#F5F5F5'}}>Jl. Majapahit No. 24, Semarang</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_attendance_container: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_attendance_time: {
    fontSize: 24,
    color: '#F5F5F5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header_attendance_date: {
    color: '#F5F5F5',
    fontSize: 14,
    textAlign: 'center',
  },
  header_attendance: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    width: 118,
    height: 118,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  header_location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
  },
});

export default HeaderAttendance;
