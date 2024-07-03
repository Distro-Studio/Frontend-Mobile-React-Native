import {View, Text, Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {EventImage, IconSearch} from '../../assets/images';
import {APP} from '../../utils/CONSTANT';
import CalendarIcon from '../../assets/icons/calendar-icon.svg';
import {getResponsive} from '../../utils';
import {FlatList} from 'react-native-gesture-handler';

const EventScreen = () => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconSearch} style={{width: 20, height: 20}} />
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        rightIcon={headerIcon()}
        screenName={'Event & Diklat'}
      />
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <View style={styles.eventCard}>
              <View>
                <Image
                  source={EventImage}
                  style={{
                    // width: '100%',
                    // width: getResponsive(342, 'width'),
                    height: getResponsive(180, 'height'),
                  }}
                  // width={getResponsive(342, 'width')}
                  // height={getResponsive(180, 'height')}
                  // resizeMode={'contain'}
                />
              </View>
              <View style={{padding: 16}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{fontSize: 12, color: APP.COLORS['primary-500']}}>
                    Diklat
                  </Text>
                  <Text>1 hours ago</Text>
                </View>
                <Text
                  style={{
                    marginVertical: 8,
                    color: '#0C0E11',
                    fontWeight: '700',
                    fontSize: 14,
                  }}>
                  Kopi, Kue, dan Keceriaan: Senja Santai Bersama Karyawan
                </Text>
                <View
                  style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                  <CalendarIcon />
                  <Text>Senin, 20 Juli 2024</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    borderRadius: 16,
    width: getResponsive(342, 'width'),
    marginVertical: 12,
  },
  container: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 70,
    alignItems: 'center',
  },
});

export default EventScreen;
