import {
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  FlatList,
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
      <CustomHeaderApp
        backButton={true}
        screenName={'Detail Schedule'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1, 2, 3, 4]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({index}) => (
              <View style={{marginRight: 16}}>
                <ScheduleCard
                  isSmall={true}
                  cardState={index === 0 ? 'active' : ''}
                />
              </View>
            )}
          />
        </View>
        <Text style={styles.employee_text}>Employee</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <EmployeeCard
                key={item}
                isShowBadge={true}
                navigation={navigation}
              />
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  employee_text: {
    marginVertical: 16,
    fontSize: 16,
    color: '#222831',
    fontWeight: '600',
  },
  employee_container: {
    marginTop: 16,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    // gap: 16,
    paddingBottom: 16,
  },
});

export default DetailScheduleScreen;
