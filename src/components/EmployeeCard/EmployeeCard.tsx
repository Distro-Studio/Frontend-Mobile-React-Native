import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import {capitalizeFirstLetter} from '../../utils';

const EmployeeCard = ({
  name,
  role,
  status,
  id,
  onActive,
  active,
  navigation,
  isShowBadge = true,
  routeName,
}) => {
  return (
    <Pressable
      style={styles.employee_card_active(active)}
      onPress={() => {
        if (onActive) {
          onActive(id);
          return;
        }
        if (navigation !== null) {
          return navigation?.navigate('DetailEmployeeScreen');
        }
      }}>
      <View style={styles.employee_card_container(routeName)}>
        <View style={styles.employee_info}>
          <View style={styles.employee_img}>{/* <Text>img</Text> */}</View>
          <View>
            <Text style={styles.employee_name}>{name}</Text>
            <Text
              style={styles.employee_role}
              numberOfLines={1}
              ellipsizeMode="tail">
              {role}
            </Text>
          </View>
        </View>
        {isShowBadge && (
          <View
            style={[
              styles.employee_badge,
              status === 'kerja'
                ? styles.employee_badge_kerja
                : status === 'cuti'
                ? styles.employee_badge_cuti
                : status === 'libur'
                ? styles.employee_badge_libur
                : styles.employee_badge_ijin,
            ]}>
            <Text
              style={[
                styles.employee_badge_text,
                status === 'kerja'
                  ? styles.employee_badge_text_kerja
                  : status === 'cuti'
                  ? styles.employee_badge_text_cuti
                  : status === 'libur'
                  ? styles.employee_badge_text_libur
                  : styles.employee_badge_text_ijin,
              ]}>
              {capitalizeFirstLetter(status)}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  employee_card_active: state => ({
    paddingLeft: 6,
    backgroundColor: state ? APP.COLORS['primary-500'] : '#FFFFFF',
    borderRadius: 12,
    width: 300,
  }),
  employee_badge_kerja: {
    backgroundColor: '#37BA72',
  },
  employee_badge_cuti: {
    backgroundColor: '#FFCE30',
  },
  employee_badge_libur: {
    backgroundColor: '#D5D5D9',
  },
  employee_badge_ijin: {
    backgroundColor: '#287DFC',
  },
  employee_badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 1000,
  },
  employee_badge_text: {
    textAlign: 'center',
  },
  employee_badge_text_kerja: {
    color: '#F5F5F5',
  },
  employee_badge_text_cuti: {
    color: '#0C0E11',
  },
  employee_badge_text_libur: {
    color: '#F5F5F5',
  },
  employee_badge_text_ijin: {
    color: '#F5F5F5',
  },
  employee_name: {
    fontWeight: '700',
    color: '#0C0E11',
  },
  employee_role: {
    color: '#5F616B',
  },
  employee_img: {
    width: 40,
    height: 40,
    backgroundColor: 'gray',
    borderRadius: 1000,
  },
  employee_info: {
    flexDirection: 'row',
    gap: 8,
  },
  employee_card_container: route => ({
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // width: route === 'DetailEmployeeScreen' && 290,
  }),
});

export default EmployeeCard;
