import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp, Input, SlipGajiCard} from '../../components';
import {getResponsive} from '../../utils';
import {Dropdown} from 'react-native-element-dropdown';
import {SlipGajiImage} from '../../assets/images';
import DownloadIcon from '../../assets/icons/download-icon.svg';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {APP} from '../../utils/CONSTANT';

const SlipGajiScreen = () => {
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [220], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);
  const dataMonth = [
    {label: 'Januari', value: 'Januari'},
    {label: 'Februari', value: 'Februari'},
    {label: 'Maret', value: 'Maret'},
    {label: 'April', value: 'April'},
    {label: 'Mei', value: 'Mei'},
    {label: 'Juni', value: 'Juni'},
    {label: 'Juli', value: 'Juli'},
    {label: 'Agustus', value: 'Agustus'},
    {label: 'September', value: 'September'},
    {label: 'Oktober', value: 'Oktober'},
    {label: 'November', value: 'November'},
    {label: 'Desember', value: 'Desember'},
  ];

  React.useEffect(() => {
    setIsDrawer(true);
  }, []);

  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Slip Gaji'}>
        <View style={{paddingBottom: 24, marginTop: 24}}>
          <View
            style={{padding: 16, backgroundColor: '#40BAB7', borderRadius: 12}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <View
                  style={{
                    backgroundColor: '#E34436',
                    borderRadius: 50,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                    width: getResponsive(80, 'width'),
                  }}>
                  <Text style={{textAlign: 'center', color: '#F5F5F5'}}>
                    Rahasia
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: '#FFFFFF',
                      marginTop: 8,
                      marginBottom: 4,
                      fontSize: 16,
                    }}>
                    Bayu Prasetya Adji Sugiyarto
                  </Text>
                  <Text style={{color: '#FFFFFF'}}>Product Design</Text>
                </View>
              </View>
              <View
                style={{
                  width: getResponsive(62, 'width'),
                  height: getResponsive(62, 'height'),
                  backgroundColor: 'red',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View style={[styles.header_dropdown_menu, {marginTop: 24}]}>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={dataMonth}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Pilih Bulan"
              // placeholder={!isFocusMonth ? 'Select item' : '...'}
              // value={dataMonth[0]}
              // onFocus={() => setIsFocusMonth(true)}
              // onBlur={() => setIsFocusMonth(false)}
              // onChange={item => {
              //   setValueMonth(item.value);
              //   setIsFocusMonth(false);
              // }}
              containerStyle={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
              itemTextStyle={{color: '#454545'}}
            />
          </View>
        </View>
      </CustomHeaderApp>
      <ScrollView style={{flex: 1, paddingHorizontal: 24, paddingBottom: 24}}>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: getResponsive(400, 'height'),
          }}>
          <Image source={SlipGajiImage} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 16,
              color: '#6B6D79',
              fontSize: 14,
            }}>
            Jika Anda ingin melihat slip gaji Anda, silakan pilih periode dari
            opsi di atas.
          </Text>
        </View> */}
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#10A9A5',
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Take Home Pay
          </Text>
          <Text
            style={{
              fontSize: 32,
              color: '#0C0E11',
              textAlign: 'center',
              fontWeight: '700',
              marginTop: 8,
            }}>
            Rp. 6.500.000
          </Text>
        </View>
        {/* cards */}
        <SlipGajiCard />
        <SlipGajiCard />
        <SlipGajiCard />
        <Pressable
          style={{
            flex: 1,
            backgroundColor: '#10A9A5',
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            borderRadius: 8,
            gap: 10,
            marginTop: 36,
          }}>
          <DownloadIcon />
          <Text style={{color: '#FFFFFF'}}>Unduh Slip Gaji</Text>
        </Pressable>
        <View style={{marginTop: 24}}>
          <Text style={{color: 'black'}}>
            *Ini adalah slip gaji yang berasal dari komputer dan tidak
            memerlukan tanda tangan basah.
          </Text>
          <Text style={{color: 'black'}}>
            Isi kuesioner ini bersifat rahasia kecuali jika diperlukan untuk
            tujuan pajak, hukum, atau pemerintah. Pelanggaran terhadap kewajiban
            kerahasiaan ini akan dikenakan sanksi, termasuk tindakan disipliner.
          </Text>
        </View>
      </ScrollView>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          screen={'SlipGaji'}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginBottom: 16,
                }}>
                Konfirmasi Pemilik Akun
              </Text>
              <Input
                name="Password"
                placeholder="Kata Sandi"
                type="password"
                secureTextEntry
              />
            </View>
            <View style={{marginTop: 24}}>
              <Pressable
                style={{
                  backgroundColor: APP.COLORS['primary-500'],
                  flex: 1,
                  padding: 12,
                  borderRadius: 8,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontWeight: '700',
                  }}>
                  Verifikasi
                </Text>
              </Pressable>
            </View>
          </View>
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#BABCBF',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0C0E11',
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderColor: '#BABCBF',
  },
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
});

export default SlipGajiScreen;
