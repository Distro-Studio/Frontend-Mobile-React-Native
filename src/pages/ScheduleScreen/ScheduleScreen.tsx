import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp, ScheduleCard} from '../../components';

const ScheduleScreen = ({navigation}) => {
  const route = useRoute();
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  console.log(route);
  return (
    <ScrollView>
      <CustomHeaderApp
        backButton={false}
        rightIcon={headerIcon()}
        screenName={'Schedule'}>
        <View style={styles.header_dropdown_menu}>
          <View>
            <Text>Menu Dropdown 1</Text>
          </View>
          <View>
            <Text>Menu Dropdown 2</Text>
          </View>
        </View>
      </CustomHeaderApp>
      {/* reminder */}
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#287DFC26',
            padding: 16,
            borderRadius: 8,
            marginBottom: 16,
          }}>
          <Text style={{lineHeight: 20, color: '#222831'}}>
            Just a reminder: HRD updates your work schedule every Week. Keep an
            eye out for the latest changes!!!
          </Text>
        </View>
      </View>
      {/* cards */}
      <View style={styles.container}>
        <ScheduleCard
          routeName={route.name}
          cardState={'active'}
          navigation={navigation}
        />
        <ScheduleCard
          routeName={route.name}
          cardState={'inactive'}
          isHoliday={true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 16,
  },
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ScheduleScreen;
