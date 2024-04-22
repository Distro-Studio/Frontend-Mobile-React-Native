import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard, ScheduleCard} from '../../components';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';

const DetailScheduleScreen = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  const width = Dimensions.get('window').width;
  const ref = React.useRef<ICarouselInstance>(null);
  const baseOptions = {
    vertical: false,
    width: width * 0.73,
    height: width / 3.5,
  } as const;
  return (
    <>
      <View style={{flex: 1}}>
        <CustomHeaderApp
          backButton={true}
          screenName={'Detail Schedule'}
          rightIcon={headerIcon()}
        />
        <View style={styles.container}>
          <View style={styles.schedule_cards_container}>
            <Carousel
              {...baseOptions}
              ref={ref}
              loop={false}
              style={{width: '100%'}}
              autoPlay={false}
              data={[...new Array(6).keys()]}
              onSnapToItem={index => console.log('current index:', index)}
              renderItem={({index}) => (
                <View key={index}>
                  <ScheduleCard
                    isSmall={true}
                    cardState={index === 0 ? 'active' : ''}
                  />
                </View>
              )}
            />
            {/* {[1, 2, 3].map(item => (
              <ScheduleCard
                key={item}
                isSmall={true}
                cardState={item === 1 ? 'active' : ''}
              />
            ))} */}
          </View>
          <View style={styles.employee_container}>
            <Text style={styles.employee_text}>Employee</Text>
            <ScrollView>
              <View style={styles.employee_card_container}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                  item => (
                    <EmployeeCard
                      key={item}
                      isShowBadge={false}
                      navigation={navigation}
                    />
                  ),
                )}
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </>
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
    // flexDirection: 'row',
    // gap: 16,
    // overflow: 'scroll',
  },
  container: {
    paddingHorizontal: 24,
  },
});

export default DetailScheduleScreen;
