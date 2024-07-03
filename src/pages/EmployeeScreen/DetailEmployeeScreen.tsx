import BottomSheet from '@gorhom/bottom-sheet';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard, ScheduleCard} from '../../components';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import Carousel, {ICarouselInstance} from 'react-native-reanimated-carousel';
import {FlatList} from 'react-native-gesture-handler';
import {getResponsive} from '../../utils';
import {dummyEmployee} from '../../utils/CONSTANT';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';

const {height} = Dimensions.get('window');

const DetailEmployeeScreen = ({navigation}: any) => {
  const route = useRoute();
  const [state, setState] = React.useState(false); // membuka bottomsheet
  const [isStatus, setIsStatus] = React.useState(false); // toggle status apakah success || failed | if status true -> calendar off  | if false -> calendar on
  const [isStatusSuccess, setIsStatusSuccess] = React.useState(false); // for showing if status success or fail
  const [data, setData] = React.useState(dummyEmployee);
  const [activeEmployee, setACtiveEmployee] = React.useState(1);
  const snapPoints = React.useMemo(
    () =>
      isStatus
        ? [28, getResponsive(310, 'height')]
        : [getResponsive(150, 'height'), 28],
    [isStatus],
  );
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const headerIcon = () => {
    return (
      <Pressable>
        <NotifyBlack />
        {/* <Image source={IconNotificationBlack} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };

  function getActiveCard(index) {
    setACtiveEmployee(index);
    return;
  }

  function renderCard({item}) {
    return (
      <View style={{marginRight: 16}}>
        <EmployeeCard
          key={item.id}
          id={item.id}
          navigation={navigation}
          active={item.id === activeEmployee ? true : false}
          routeName={route.name}
          name={item.name}
          role={item.role}
          status={item.state}
          onPress={() => getActiveCard(item.id)}
        />
      </View>
    );
  }

  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Detail Karyawan'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderCard}
          />
        </View>
        <Text style={styles.schedule_title}>Jadwal</Text>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <ScheduleCard
                key={item}
                routeName={route.name}
                // cardState={item % 3 ? 'active' : 'inactive'}
                isHoliday={item % 3 ? false : true}
                onSwap={() => {
                  setState(!state);
                  setIsStatus(false);
                }}
              />
            </View>
          )}
        />
        {/* <View style={[styles.schedule_container]}> */}

        {/* <View style={styles.schedule_cards_container}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => (
              <ScheduleCard
                key={item}
                routeName={route.name}
                cardState={'active'}
                onSwap={() => {
                  setState(!state);
                  setIsStatus(false);
                }}
              />
            ))}
          </View> */}
        {/* </View> */}
      </View>
      {state && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}
          isStatus={isStatus}
          isStatusSuccess={isStatusSuccess}
          onClose={() => setState(false)}
          onPress={() => {
            setIsStatus(true);
            setIsStatusSuccess(true);
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  schedule_cards_container: {
    gap: 16,
  },
  schedule_title: {
    marginVertical: 16,
    fontSize: 16,
    color: '#222831',
    fontWeight: '600',
    marginBottom: 16,
  },
  schedule_container: {
    marginTop: 16,
  },
  employee_card_container: {
    // flexDirection: 'row',
    // gap: 16,
    // overflow: 'scroll',
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default DetailEmployeeScreen;
