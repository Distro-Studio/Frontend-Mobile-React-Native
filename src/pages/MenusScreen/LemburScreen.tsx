import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {LineChart} from 'lucide-react-native';

const LemburScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Lembur'} />
      <ScrollView style={styles.container}>
        <Text style={{fontWeight: '700', color: 'black'}}>
          Statistik Lembur
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            marginBottom: 16,
          }}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 12,
              borderRadius: 12,
              width: '48%',
            }}>
            <LineChart color={'rgb(227, 68, 54)'} />
            <Text style={{marginVertical: 2, fontSize: 14, color: 'black'}}>
              Total Lembur
            </Text>
            <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
              4{' '}
              <Text style={{fontSize: 12, fontWeight: '400', opacity: 0.4}}>
                kali
              </Text>
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              padding: 12,
              borderRadius: 12,
              width: '48%',
            }}>
            <LineChart color={'rgb(62, 209, 128)'} />
            <Text style={{marginVertical: 2, fontSize: 14, color: 'black'}}>
              Total Waktu
            </Text>
            <Text style={{fontSize: 24, fontWeight: '700', color: 'black'}}>
              76{' '}
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  opacity: 0.4,
                  color: 'black',
                }}>
                menit
              </Text>
            </Text>
          </View>
        </View>
        <Text style={{fontWeight: '700', marginBottom: 8, color: 'black'}}>
          Riwayat
        </Text>
        <FlatList
          data={[1, 2, 3]}
          scrollEnabled={false}
          contentContainerStyle={{gap: 8}}
          renderItem={() => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 16,
                borderRadius: 8,
                flexDirection: 'row',
              }}>
              <View style={{gap: 16, width: '50%'}}>
                <View>
                  <Text style={{fontSize: 12, opacity: 0.4, color: 'black'}}>
                    Tanggal Lembur
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    3 Juli 2024
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 12, opacity: 0.4, color: 'black'}}>
                    Durasi
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    1 Jam
                  </Text>
                </View>
              </View>
              <View style={{gap: 16, width: '50%'}}>
                <View>
                  <Text style={{fontSize: 12, opacity: 0.4, color: 'black'}}>
                    Shift
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    1
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 12, opacity: 0.4, color: 'black'}}>
                    Diajukan Oleh
                  </Text>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: 'black'}}>
                    -
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    paddingBottom: 12,
  },
});

export default LemburScreen;
