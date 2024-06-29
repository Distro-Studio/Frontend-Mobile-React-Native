import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IconActivity,
  IconActivityActive,
  IconEmployee,
  IconEmployeeActive,
  IconHome,
  IconHomeActive,
  IconProfile,
  IconProfileActive,
  IconSchedule,
  IconScheduleActive,
} from '../../assets/icons';
import {APP} from '../../utils/CONSTANT';
// import {IconActivity, IconEmployee, IconProfile} from '../../assets/images';

const AppImages = {
  activeBerandaIcon: {
    source: IconHomeActive,
    style: {width: 24, height: 24},
  },
  activeJadwalIcon: {
    source: IconScheduleActive,
    style: {width: 24, height: 24},
  },
  activeKaryawanIcon: {
    source: IconEmployeeActive,
    style: {width: 24, height: 24},
  },
  activeAktivitasIcon: {
    source: IconActivityActive,
    style: {width: 24, height: 24},
  },
  activeProfilIcon: {
    source: IconProfileActive,
    style: {width: 24, height: 24},
  },
  inactiveBerandaIcon: {
    source: IconHome,
    style: {width: 24, height: 24},
  },
  inactiveJadwalIcon: {
    source: IconSchedule,
    style: {width: 24, height: 24},
  },
  inactiveKaryawanIcon: {
    source: IconEmployee,
    style: {width: 24, height: 24},
  },
  inactiveAktivitasIcon: {
    source: IconActivity,
    style: {width: 24, height: 24},
  },
  inactiveProfilIcon: {
    source: IconProfile,
    style: {width: 24, height: 24},
  },
};

const BottomTabIcon = ({title, focused}: any) => {
  const iconName = `${focused ? '' : 'in'}active${title}Icon`;
  const imgSrc = AppImages[iconName];
  return (
    <View style={styles.tabButton}>
      <View>
        <imgSrc.source />
      </View>
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
  tabTitle: (active: any) => ({
    color: active ? APP.COLORS['primary-500'] : '#454545',
  }),
});

export default BottomTabIcon;
