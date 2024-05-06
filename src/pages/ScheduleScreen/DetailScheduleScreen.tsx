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

const DetailScheduleScreen = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  const [active, setActive] = React.useState(1);

  function getActiveCard(index) {
    console.log(index);
    setActive(index);
    return;
  }

  function renderItem({item}) {
    console.log(item);
    return (
      <View style={{marginRight: 16}}>
        <ScheduleCard
          id={item}
          isSmall={true}
          cardState={item === active ? 'active' : ''}
          onActive={getActiveCard}
        />
      </View>
    );
  }

  console.log(active);
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
