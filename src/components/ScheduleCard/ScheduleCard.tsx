import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import {IconActivityIn, IconActivityOut} from '../../assets/images';
import {getResponsive} from '../../utils';
import InIcon from '../../assets/icons/in-icon.svg';
import OutIcon from '../../assets/icons/out-icon.svg';
import {ArrowDownUp} from 'lucide-react-native';

const ScheduleCard = ({
  routeName,
  isNull = false,
  isHoliday = false,
  isSmall = false,
  cardState,
  navigation,
  onSwap,
  id,
  onActive,
  onPress,
}) => {
  // cardState 3 -> active, inactive, default
  // inactive + isHoliday -> holiday
  // active -> people img
  // default -> swap
  return (
    <Pressable
      style={styles.schedule_card_state(cardState, isSmall)}
      onPress={onPress}>
      <View style={styles.schedule_card_container}>
        {/* info */}
        <View>
          <Text style={{color: '#0C0E11', opacity: 0.4}}>
            {isHoliday ? 'Libur' : 'Pagi'} - Minggu 1
          </Text>
          <Text style={[styles.schedule_date(cardState, isHoliday), {}]}>
            01 Nov 2023, Monday
          </Text>
          {!isHoliday && (
            <View style={styles.schedule_times}>
              <View style={styles.schedule_time}>
                <View
                  style={[
                    styles.schedule_icon,
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#E7F6F6',
                      borderRadius: 50,
                    },
                  ]}>
                  <InIcon width={11} height={11} />
                </View>
                <Text style={{fontSize: 13, color: '#0C0E11'}}>07.30</Text>
              </View>
              <View style={styles.schedule_time}>
                <View
                  style={[
                    styles.schedule_icon,
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFEDEC',
                      borderRadius: 50,
                    },
                  ]}>
                  <OutIcon width={11} height={11} />
                </View>
                <Text style={{fontSize: 13, color: '#0C0E11'}}>16.30</Text>
              </View>
            </View>
          )}
        </View>
        {/* schedule screen people */}
        {isNull === false && routeName === 'Jadwal' && (
          <View style={styles.schedule_people}>
            <View style={styles.schedule_img}></View>
            <View
              style={[styles.schedule_img, {backgroundColor: 'blue'}]}></View>
            <View
              style={[
                styles.schedule_img,
                {
                  backgroundColor: '#F5F5F5',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Text style={{color: '#0C0E11'}}>+3</Text>
            </View>
          </View>
        )}
        {/* detail employee screen */}
        {isNull === false &&
          routeName === 'DetailEmployeeScreen' &&
          cardState !== 'inactive' && (
            <Pressable
              onPress={onSwap}
              style={{
                paddingVertical: 6,
                paddingHorizontal: 10,
                borderWidth: 2,
                borderRadius: 8,
                borderColor: APP.COLORS['primary-500'],
                flexDirection: 'row',
                alignItems: 'center',
                gap: 4,
              }}>
              <ArrowDownUp
                style={{color: APP.COLORS['primary-500']}}
                size={16}
              />
              <Text style={{color: APP.COLORS['primary-500']}}>Tukar</Text>
            </Pressable>
          )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  schedule_people: {
    flexDirection: 'row',
    gap: -12,
    alignSelf: 'flex-end',
  },
  schedule_img: {
    width: 32,
    height: 32,
    borderRadius: 1000,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  schedule_date: (state, isHoliday) => ({
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: isHoliday ? '#777986' : '#222831',
  }),
  schedule_times: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 16,
  },
  schedule_icon: {
    width: 20,
    height: 20,
  },
  schedule_time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  schedule_card_container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 12,
  },
  schedule_card_state: (state, isSmall) => ({
    paddingLeft: 6,
    backgroundColor:
      state === 'inactive'
        ? '#D5D5D9'
        : state === 'active'
        ? APP.COLORS['primary-500']
        : '#FFFFFF',
    borderRadius: 12,
    width: isSmall ? getResponsive(280, 'width') : '100%',
  }),
});

export default ScheduleCard;
