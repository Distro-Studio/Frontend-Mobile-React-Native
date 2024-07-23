import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
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
import {APP, dummyEmployee} from '../../utils/CONSTANT';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';
import {ArrowDown, ArrowRightLeft, ArrowUp, User, X} from 'lucide-react-native';
import InIcon from '../../assets/icons/in-icon.svg';
import OutIcon from '../../assets/icons/out-icon.svg';

const {height} = Dimensions.get('window');

const DetailEmployeeScreen = ({navigation}: any) => {
  const route = useRoute();
  const [state, setState] = React.useState(false); // membuka bottomsheet
  const [isStatus, setIsStatus] = React.useState(false); // toggle status apakah success || failed | if status true -> calendar off  | if false -> calendar on
  const [isStatusSuccess, setIsStatusSuccess] = React.useState(false); // for showing if status success or fail
  const [data, setData] = React.useState(dummyEmployee);
  const [activeEmployee, setACtiveEmployee] = React.useState(1);
  const snapPoints = React.useMemo(() => [650], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setState(index === -1 ? false : true);
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
          }}>
          <View style={{paddingVertical: 8}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 12,
                paddingHorizontal: 24,
              }}>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                Tukar Jadwal
              </Text>
              <Pressable
                onPress={() => {
                  setState(false);
                  bottomSheetRef.current?.close();
                }}>
                <X style={{color: '#000000'}} />
              </Pressable>
            </View>
            <View style={{paddingHorizontal: 24}}>
              <Text
                style={{fontWeight: '700', marginBottom: 8, color: 'black'}}>
                Jadwal Ditukar
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  // padding: 16,
                  backgroundColor: '#FFFFFF',
                  borderColor: '#e3e3e3',
                  borderRadius: 8,
                  flexDirection: 'row',
                  // justifyContent: 'space-between',
                  // alignItems: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: '#ececec',
                    // height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 4,
                    width: 80,
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      marginTop: 8,
                      textAlign: 'center',
                      color: 'black',
                    }}>
                    Jadwal Ditukar
                  </Text>
                  <ArrowDown
                    style={{color: APP.COLORS['primary-500']}}
                    size={32}
                  />
                </View>
                <View style={{padding: 16}}>
                  <Text style={{opacity: 0.4, color: 'black'}}>
                    Pagi - Minggu 1
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      marginVertical: 8,
                      fontSize: 16,
                      color: 'black',
                    }}>
                    1 Januari 2024
                  </Text>
                  <View style={styles.schedule_times}>
                    <View style={styles.schedule_time}>
                      <View
                        style={[
                          styles.schedule_icon,
                          {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#E7F6F6',
                            borderRadius: 50,
                          },
                        ]}>
                        <InIcon width={11} height={11} />
                      </View>
                      <Text style={{fontSize: 12, color: '#0C0E11'}}>
                        07.30
                      </Text>
                    </View>
                    <View style={styles.schedule_time}>
                      <View
                        style={[
                          styles.schedule_icon,
                          {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#FFEDEC',
                            borderRadius: 50,
                          },
                        ]}>
                        <OutIcon width={11} height={11} />
                      </View>
                      <Text style={{fontSize: 12, color: '#0C0E11'}}>
                        16.30
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/*  */}
            <View
              style={{
                marginVertical: 16,
                paddingVertical: 16,
                borderTopWidth: 4,
                borderBottomWidth: 4,
                borderColor: '#f1f2f3',
              }}>
              <View style={{paddingHorizontal: 24}}>
                <Text
                  style={{
                    fontWeight: '700',
                    marginBottom: 8,
                    color: 'black',
                  }}>
                  Pilih Jadwal Anda Untuk Ditukar
                </Text>
                <FlatList
                  data={[1, 2, 3]}
                  horizontal
                  contentContainerStyle={{gap: 8}}
                  renderItem={() => (
                    <View
                      style={{
                        paddingLeft: 4,
                        backgroundColor: APP.COLORS['primary-500'],
                        borderRadius: 8,
                        width: getResponsive(280, 'width'),
                      }}>
                      <View
                        style={{
                          borderWidth: 1,
                          // padding: 16,
                          backgroundColor: '#FFFFFF',
                          borderColor: '#e3e3e3',
                          borderRadius: 8,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          // alignItems: 'center',
                        }}>
                        <View style={{padding: 16}}>
                          <Text style={{opacity: 0.4, color: 'black'}}>
                            Pagi - Minggu 1
                          </Text>
                          <Text
                            style={{
                              fontWeight: '700',
                              marginVertical: 8,
                              fontSize: 16,
                              color: 'black',
                            }}>
                            1 Januari 2024
                          </Text>
                          <View style={styles.schedule_times}>
                            <View style={styles.schedule_time}>
                              <View
                                style={[
                                  styles.schedule_icon,
                                  {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#E7F6F6',
                                    borderRadius: 50,
                                  },
                                ]}>
                                <InIcon width={11} height={11} />
                              </View>
                              <Text style={{fontSize: 12, color: '#0C0E11'}}>
                                07.30
                              </Text>
                            </View>
                            <View style={styles.schedule_time}>
                              <View
                                style={[
                                  styles.schedule_icon,
                                  {
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#FFEDEC',
                                    borderRadius: 50,
                                  },
                                ]}>
                                <OutIcon width={11} height={11} />
                              </View>
                              <Text style={{fontSize: 12, color: '#0C0E11'}}>
                                16.30
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View
                          style={{
                            backgroundColor: '#ececec',
                            // height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingHorizontal: 4,
                            width: 80,
                          }}>
                          <ArrowUp
                            style={{color: APP.COLORS['primary-500']}}
                            size={32}
                          />
                          <Text
                            style={{
                              fontWeight: '700',
                              marginTop: 8,
                              textAlign: 'center',
                              color: 'black',
                            }}>
                            Jadwal Anda
                          </Text>
                        </View>
                      </View>
                    </View>
                  )}
                />
                <Text
                  style={{
                    marginTop: 16,
                    textAlign: 'center',
                    opacity: 0.4,
                    color: 'black',
                  }}>
                  Geser untuk pilih jadwal anda
                </Text>
              </View>
            </View>
            {/*  */}
            <View style={{paddingHorizontal: 24}}>
              <View style={{flexDirection: 'row', gap: 4, marginBottom: 8}}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  Penukaran Jadwal
                </Text>
                <Text style={{color: '#d5d5d9'}}>(jadwal anda di kanan)</Text>
              </View>
              {/*  */}
              <BottomSheetFlatList
                data={[1, 2, 3]}
                scrollEnabled={false}
                contentContainerStyle={{gap: 8}}
                renderItem={() => (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View>
                      <Text style={{opacity: 0.4, color: 'black'}}>Pagi</Text>
                      <Text
                        style={{
                          color: 'black',
                          marginVertical: 8,
                          fontWeight: '600',
                        }}>
                        1 Januari 2024
                      </Text>
                      <View style={styles.schedule_times}>
                        <View style={styles.schedule_time}>
                          <View
                            style={[
                              styles.schedule_icon,
                              {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#E7F6F6',
                                borderRadius: 50,
                              },
                            ]}>
                            <InIcon width={11} height={11} />
                          </View>
                          <Text style={{fontSize: 12, color: '#0C0E11'}}>
                            07.30
                          </Text>
                        </View>
                        <View style={styles.schedule_time}>
                          <View
                            style={[
                              styles.schedule_icon,
                              {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFEDEC',
                                borderRadius: 50,
                              },
                            ]}>
                            <OutIcon width={11} height={11} />
                          </View>
                          <Text style={{fontSize: 12, color: '#0C0E11'}}>
                            16.30
                          </Text>
                        </View>
                      </View>
                    </View>
                    <ArrowRightLeft color={'black'} />
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <Text style={{opacity: 0.4, color: 'black'}}>Pagi</Text>
                        <User color={APP.COLORS['primary-500']} size={16} />
                      </View>
                      <Text
                        style={{
                          color: 'black',
                          marginVertical: 8,
                          fontWeight: '600',
                        }}>
                        1 Januari 2024
                      </Text>
                      <View style={styles.schedule_times}>
                        <View style={styles.schedule_time}>
                          <View
                            style={[
                              styles.schedule_icon,
                              {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#E7F6F6',
                                borderRadius: 50,
                              },
                            ]}>
                            <InIcon width={11} height={11} />
                          </View>
                          <Text style={{fontSize: 12, color: '#0C0E11'}}>
                            07.30
                          </Text>
                        </View>
                        <View style={styles.schedule_time}>
                          <View
                            style={[
                              styles.schedule_icon,
                              {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFEDEC',
                                borderRadius: 50,
                              },
                            ]}>
                            <OutIcon width={11} height={11} />
                          </View>
                          <Text style={{fontSize: 12, color: '#0C0E11'}}>
                            16.30
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              />
              {/*  */}
            </View>
          </View>
          <Pressable
            style={{
              marginHorizontal: 24,
              backgroundColor: APP.COLORS['primary-500'],
              flex: 1,
              padding: 12,
              borderRadius: 8,
              marginVertical: 16,
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: '#FFFFFF',
                fontWeight: '700',
              }}>
              Konfirmasi
            </Text>
          </Pressable>
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  schedule_times: {
    flexDirection: 'row',
    gap: 16,
  },
  schedule_icon: {
    width: 20,
    height: 20,
  },
  schedule_time: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
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
