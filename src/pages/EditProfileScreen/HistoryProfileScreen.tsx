import {View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {ArrowRight} from 'lucide-react-native';

const HistoryProfileScreen = () => {
  const [detailData, setDetailData] = React.useState<number>();
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(160, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);

  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Riwayat Perubahan Data'}
      />
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3]}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                setIsDrawer(true);
                setDetailData(item);
              }}
              style={{
                backgroundColor: '#FFFFFF',
                padding: 16,
                borderRadius: 12,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={{color: 'black', opacity: 0.4}}>Kolom Data</Text>
                <Text style={{color: 'black', marginTop: 4}}>
                  Tanggal Lahir
                </Text>
                <Text style={{color: 'black', opacity: 0.4, marginTop: 12}}>
                  Tanggal Pengajuan
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>10 Juli 2024</Text>
                <Text style={{color: 'black', opacity: 0.4, marginTop: 12}}>
                  Tanggal Persetujuan
                </Text>
                <Text style={{color: 'black', marginTop: 4}}>16 Juli 2024</Text>
              </View>
              <View
                style={{
                  alignSelf: 'flex-start',
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  borderRadius: 100,
                  backgroundColor: '#FEEBC8',
                }}>
                <Text style={{color: '#7B341E'}}>Menunggu</Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
            <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
              Detail Perubahan Data
            </Text>
            <View style={{marginTop: 8}}>
              <Text style={{color: 'black'}}>Rincian Pengajuan</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 12,
                }}>
                <Text style={{color: 'black', opacity: 0.4}}>Kolom</Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'black',
                    width: 'auto',
                    height: 2,
                    opacity: 0.1,
                  }}
                />
                <Text style={{color: 'black'}}>Tanggal Lahir</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 12,
                }}>
                <Text style={{color: 'black', opacity: 0.4}}>
                  Tanggal Pengajuan
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'black',
                    width: 'auto',
                    height: 2,
                    opacity: 0.1,
                  }}
                />
                <Text style={{color: 'black'}}>10 Juli 2024</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 12,
                }}>
                <Text style={{color: 'black', opacity: 0.4}}>
                  Tanggal Persetujuan
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'black',
                    width: 'auto',
                    height: 2,
                    opacity: 0.1,
                  }}
                />
                <Text style={{color: 'black'}}>16 Juli 2024</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 12,
                }}>
                <Text style={{color: 'black', opacity: 0.4}}>
                  Status Pengajuan
                </Text>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'black',
                    width: 'auto',
                    height: 2,
                    opacity: 0.1,
                  }}
                />
                <View
                  style={{
                    alignSelf: 'flex-start',
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 100,
                    backgroundColor: '#FEEBC8',
                  }}>
                  <Text style={{color: '#7B341E', fontSize: 12}}>Menunggu</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 8}}>
              <Text style={{color: 'black'}}>Data Pengajuan</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 12,
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{color: 'black', opacity: 0.4}}>Original</Text>
                  <Text style={{color: 'black', marginTop: 4}}>
                    10 Januari 2024
                  </Text>
                </View>
                <ArrowRight color={'black'} size={16} />
                <View>
                  <Text style={{color: 'black', opacity: 0.4}}>Pengajuan</Text>
                  <Text style={{color: 'black', marginTop: 4}}>
                    17 Juli 2024
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              onPress={() => setIsDrawer(false)}
              style={{
                backgroundColor: '#EDF2F7',
                flex: 1,
                padding: 8,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 24,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '700',
                }}>
                Mengerti
              </Text>
            </Pressable>
          </View>
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 16,
    flex: 1,
  },
});

export default HistoryProfileScreen;
