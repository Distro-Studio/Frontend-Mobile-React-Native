import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const EmployeeCard = ({
  name,
  role,
  status,
  id,
  active,
  navigation,
  isShowBadge = true,
  routeName,
}) => {
  return (
    <Pressable
      style={styles.employee_card_active(active)}
      onPress={() => navigation.navigate('DetailEmployeeScreen')}>
      <View style={styles.employee_card_container(routeName)}>
        <View style={styles.employee_info}>
          <View style={styles.employee_img}>{/* <Text>img</Text> */}</View>
          <View>
            <Text style={styles.employee_name}>John Doe</Text>
            <Text
              style={styles.employee_role}
              numberOfLines={1}
              ellipsizeMode="tail">
              Software Development
            </Text>
          </View>
        </View>
        {isShowBadge && (
          <View style={[styles.employee_badge, styles.employee_badge_kerja]}>
            <Text
              style={[
                styles.employee_badge_text,
                styles.employee_badge_text_kerja,
              ]}>
              Kerja
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
    backgroundColor: state && '#287DFC',
    borderRadius: 12,
    width: state && 300,
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
