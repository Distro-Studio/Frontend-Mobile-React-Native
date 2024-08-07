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
import {dummyEmployee} from '../../utils/CONSTANT';
import {useRoute} from '@react-navigation/native';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';

const DetailScheduleScreen = ({navigation}) => {
  const route = useRoute();
  const headerIcon = () => {
    return (
      <Pressable>
        <NotifyBlack />
        {/* <Image source={IconNotificationBlack} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  const [active, setActive] = React.useState(1);

  function getActiveCard(index) {
    setActive(index);
    return;
  }

  function renderItem({item}) {
    return (
      <View style={{marginRight: 16}}>
        <ScheduleCard
          id={item}
          isSmall={true}
          cardState={item === active ? 'active' : ''}
          onActive={getActiveCard}
          onPress={() => getActiveCard(item)}
        />
      </View>
    );
  }

  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Detail Jadwal'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View>
          <FlatList
            data={[1, 2, 3, 4]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
          />
        </View>
        <Text style={styles.employee_text}>Karyawan</Text>
        <FlatList
          data={dummyEmployee}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <EmployeeCard
                key={item.id}
                isShowBadge={true}
                navigation={navigation}
                name={item.name}
                role={item.role}
                status={item.state}
                routeName={route.name}
                onPress={() => navigation.navigate('DetailEmployeeScreen')}
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
