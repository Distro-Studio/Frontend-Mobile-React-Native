import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import {
  IconActivity,
  IconEmployee,
  IconHomeActive,
  IconProfile,
  IconSchedule,
} from '../../assets/images';

const AppImages = {
  activeHomeIcon: {
    source: IconHomeActive,
    style: {width: 24, height: 24},
  },
  inactiveScheduleIcon: {
    source: IconSchedule,
    style: {width: 24, height: 24},
  },
  inactiveEmployeeIcon: {
    source: IconEmployee,
    style: {width: 24, height: 24},
  },
  inactiveActivityIcon: {
    source: IconActivity,
    style: {width: 24, height: 24},
  },
  inactiveProfileIcon: {
    source: IconProfile,
    style: {width: 24, height: 24},
  },
};

const BottomTabIcon = ({title, focused}: any) => {
  const iconName = `${focused ? '' : 'in'}active${title}Icon`;
  const imgSrc = AppImages[iconName];
  return (
    <View style={styles.tabButton}>
      <Image {...imgSrc} />
      <Text style={styles.tabTitle(focused)}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabTitle: active => ({
    color: active ? APP.COLORS['primary-500'] : '#454545',
  }),
});

export default BottomTabIcon;
