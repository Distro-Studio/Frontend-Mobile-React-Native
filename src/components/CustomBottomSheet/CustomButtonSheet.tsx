import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import {
  IconClose,
  IconFailPresence,
  IconSuccessPresence,
} from '../../assets/images';
import CustomButton from '../CustomButton/CustomButton';
import {APP} from '../../utils/CONSTANT';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
const CustomButtonSheet = ({
  sheetRef,
  handleSheetChanges,
  snapPoints,
  children,
  isStatus,
  isStatusSuccess,
  onClose,
  onPress,
  showCalendar,
}: any) => {
  return (
    <BottomSheet
      ref={sheetRef}
      onChange={handleSheetChanges}
      snapPoints={snapPoints}>
      <BottomSheetView style={styles.sheetContainer}>
        {children}
        {/* <>
          {isStatus && (
            <View style={{paddingHorizontal: 24}}>
              <Image
                source={
                  isStatusSuccess ? IconSuccessPresence : IconFailPresence
                }
                style={{
                  marginTop: 8,
                  marginBottom: 16,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}
              />
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '700',
                    textAlign: 'center',
                    color: '#000000',
                  }}>
                  {isStatusSuccess
                    ? 'Penukaran Jadwal Berhasil Diterapkan'
                    : 'Maaf, tanggal yang kamu pilih sudah ada yang ingin tukar.'}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                    marginVertical: 16,
                    color: '#000000',
                    fontSize: 14,
                  }}>
                  {isStatusSuccess
                    ? 'Permintaan tukar jadwal Anda sedang dalam proses di bagian SDM dan menunggu persetujuan teman Anda. Mohon bersabar.Terima kasih!'
                    : 'Kamu bisa pilih tanggal lain yang masih kosong, atau cari karyawan lain yang mau tukar di tanggal tersebut.'}
                </Text>
                <CustomButton
                  onPress={onClose}
                  mt={16}
                  borad={8}
                  padding={10}
                  bgColor={APP.COLORS['primary-500']}
                  text="Selesai"
                />
              </View>
            </View>
          )}
          {!isStatus && (
            <View>
              <View style={{padding: 24}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 12,
                        fontWeight: '400',
                      }}>
                      Jadwal Karyawan
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: 14,
                      }}>
                      01 Nov 2023
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: '#000000',
                        fontSize: 12,
                        fontWeight: '400',
                      }}>
                      Jadwal Anda
                    </Text>
                    <Text
                      style={{
                        color: '#000000',
                        fontWeight: '600',
                        fontSize: 14,
                      }}>
                      02 Nov 2023
                    </Text>
                  </View>
                </View>
                <CustomButton
                  bgColor="#10A9A5"
                  borad={8}
                  padding={10}
                  mt={16}
                  text="Tukar"
                  onPress={onPress}
                />
              </View>
              {showCalendar && (
                <>
                  <View style={styles.sheetHeader}>
                    <Text>Set The Dates</Text>
                    <Pressable onPress={onClose}>
                      <Image source={IconClose} width={24} height={24} />
                    </Pressable>
                  </View>
                  <View style={{marginHorizontal: 5}}>
                    <CustomDatePicker modeCalendar="calendar" />
                  </View>
                  <View style={{paddingHorizontal: 24}}>
                    <View style={{marginBottom: 16}}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: '#454545',
                          fontWeight: '500',
                        }}>
                        Tanggal
                      </Text>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#0C0E11',
                          fontWeight: '500',
                        }}>
                        15 Dec 2023
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#0C0E11',
                          fontWeight: '500',
                        }}>
                        Nama Karyawan
                      </Text>
                      <View style={styles.sheetEmployeeContainer}>
                        <View
                          style={{
                            height: 24,
                            width: 24,
                            borderRadius: 1000,
                            backgroundColor: 'red',
                          }}
                        />
                        <Text style={{fontSize: 14, color: '#181818'}}>
                          Albert Flores
                        </Text>
                      </View>
                    </View>
                    <CustomButton
                      bgColor="#10A9A5"
                      borad={8}
                      padding={10}
                      mt={16}
                      text="Tukar"
                      onPress={onPress}
                    />
                  </View>
                </>
              )}
            </View>
          )}
        </> */}
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetEmployeeContainer: {
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    backgroundColor: '#F1F2F3',
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  sheetContainer: {
    flex: 1,
    // padding: 24,
  },
});

export default CustomButtonSheet;
