import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard, ScheduleCard} from '../../components';

const DetailScheduleScreen = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  return (
    <ScrollView>
      <CustomHeaderApp
        backButton={true}
        screenName={'Detail Schedule'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View style={styles.schedule_cards_container}>
          {[1, 2, 3].map(item => (
            <ScheduleCard
              key={item}
              isSmall={true}
              cardState={item === 1 ? 'active' : ''}
            />
          ))}
        </View>
        <View style={styles.employee_container}>
          <Text style={styles.employee_text}>Employee</Text>
          <View style={styles.employee_card_container}>
            {[1, 2, 3, 4, 5].map(item => (
              <EmployeeCard
                key={item}
                isShowBadge={false}
                navigation={navigation}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  employee_card_container: {
    gap: 16,
  },
  employee_text: {
    marginBottom: 16,
    fontSize: 16,
    color: '#222831',
    fontWeight: '600',
  },
  employee_container: {
    marginTop: 16,
  },
  schedule_cards_container: {
    flexDirection: 'row',
    gap: 16,
    overflow: 'scroll',
  },
  container: {
    paddingHorizontal: 24,
  },
});

export default DetailScheduleScreen;
