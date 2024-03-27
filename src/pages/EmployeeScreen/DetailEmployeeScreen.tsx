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

const {height} = Dimensions.get('window');

const DetailEmployeeScreen = ({navigation}: any) => {
  const route = useRoute();
  const state = true; // membuka bottomsheet
  const isStatus = true; // toggle status apakah success || failed | if status true -> calendar off  | if false -> calendar on
  const isStatusSuccess = false; // for showing if status success or fail
  const snapPoints = React.useMemo(
    () => (isStatus ? [310, 32] : [32, 700, height / 2]),
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
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <CustomHeaderApp
        backButton={true}
        screenName={'Detail Employee'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View style={styles.employee_card_container}>
          {[1, 2, 3, 4, 5].map(item => (
            <EmployeeCard
              key={item}
              navigation={navigation}
              active={item === 1 ? true : false}
            />
          ))}
        </View>
        <View style={[styles.schedule_container, {paddingBottom: 120}]}>
          <Text style={styles.schedule_title}>Schedule</Text>
          <ScrollView>
            <View style={styles.schedule_cards_container}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(item => (
                <ScheduleCard
                  key={item}
                  routeName={route.name}
                  cardState={'active'}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
      {state && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}
          isStatus={isStatus}
          isStatusSuccess={isStatusSuccess}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  schedule_cards_container: {
    gap: 16,
  },
  schedule_title: {
    fontSize: 16,
    color: '#222831',
    fontWeight: '600',
    marginBottom: 16,
  },
  schedule_container: {
    marginTop: 16,
  },
  employee_card_container: {
    flexDirection: 'row',
    gap: 16,
    overflow: 'scroll',
  },
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default DetailEmployeeScreen;
