import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  IconAttendanceIn,
  IconAttendanceOut,
  IconAttendanceTotal,
} from '../../assets/images';
import ClockIn from '../../assets/icons/clock-in-icon.svg';
import ClockOut from '../../assets/icons/clock-out-icon.svg';
import ClockTotal from '../../assets/icons/clock-total-icon.svg';

const HeaderTimeAttendance = () => {
  return (
    <View style={styles.header_attendance_time_container}>
      <View style={styles.attendance_container}>
        <View style={{maxHeight: 32, maxWidth: 32}}>
          <ClockIn />
          {/* <Image source={IconAttendanceIn} style={{resizeMode: 'cover'}} /> */}
        </View>
        <Text style={styles.header_attendance_time_text}>07.40</Text>
        <Text style={styles.header_attendance_time_status}>Masuk</Text>
      </View>
      <View style={styles.attendance_container}>
        <View style={{maxHeight: 32, maxWidth: 32}}>
          <ClockOut />
          {/* <Image source={IconAttendanceOut} style={{resizeMode: 'cover'}} /> */}
        </View>
        <Text style={styles.header_attendance_time_text}>16.40</Text>
        <Text style={styles.header_attendance_time_status}>Keluar</Text>
      </View>
      <View style={styles.attendance_container}>
        <View style={{maxHeight: 32, maxWidth: 32}}>
          <ClockTotal />
          {/* <Image source={IconAttendanceTotal} style={{resizeMode: 'cover'}} /> */}
        </View>
        <Text style={styles.header_attendance_time_text}>09h00m</Text>
        <Text style={styles.header_attendance_time_status}>Jam Kerja</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header_attendance_time_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 24,
    // flex: 1,
  },
  attendance_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_attendance_time_text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F5F5F5',
    marginTop: 8,
  },
  header_attendance_time_status: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F5F5F5',
  },
});

export default HeaderTimeAttendance;
