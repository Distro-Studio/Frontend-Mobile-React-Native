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
    style: {width: 20, height: 20},
  },
  activeJadwalIcon: {
    source: IconScheduleActive,
    style: {width: 20, height: 20},
  },
  activeKaryawanIcon: {
    source: IconEmployeeActive,
    style: {width: 20, height: 20},
  },
  activeAktivitasIcon: {
    source: IconActivityActive,
    style: {width: 20, height: 20},
  },
  activeProfilIcon: {
    source: IconProfileActive,
    style: {width: 20, height: 20},
  },
  inactiveBerandaIcon: {
    source: IconHome,
    style: {width: 20, height: 20},
  },
  inactiveJadwalIcon: {
    source: IconSchedule,
    style: {width: 20, height: 20},
  },
  inactiveKaryawanIcon: {
    source: IconEmployee,
    style: {width: 20, height: 20},
  },
  inactiveAktivitasIcon: {
    source: IconActivity,
    style: {width: 20, height: 20},
  },
  inactiveProfilIcon: {
    source: IconProfile,
    style: {width: 20, height: 20},
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
    fontSize: 10,
  }),
});

export default BottomTabIcon;
