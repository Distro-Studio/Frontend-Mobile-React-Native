import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import React from 'react';
import {CustomHeaderApp, Input} from '../../components';
import {APP} from '../../utils/CONSTANT';
import {TextInput} from 'react-native-gesture-handler';

const LaporanScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Laporan'} />
      <ScrollView>
        <View style={[styles.container, {paddingBottom: 16}]}>
          <View
            style={{backgroundColor: '#bee3f8', padding: 16, borderRadius: 12}}>
            <Text style={{color: 'black', fontSize: 14}}>
              Harap gunakan fitur lapor ini dengan bijak. Segala bentuk
              pelanggaran akan diproses sesuai dengan peraturan instansi.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              padding: 16,
              marginTop: 16,
            }}>
            <Text style={{fontSize: 20, fontWeight: '600', color: 'black'}}>
              Buat Laporan
            </Text>
            {/* <Text
            style={{
              color: '#222831',
              fontWeight: '500',
              marginVertical: 16,
            }}>
            Status Kerja
          </Text> */}

            <View style={{marginTop: 16}}>
              <Input
                name="Pelaku / Subyek"
                placeholder="Masukkan Subyek"
                editable={true}
              />
            </View>
            <Pressable style={{marginTop: 16}}>
              <Input
                name="Tanggal Kejadian"
                placeholder="Pilih Tanggal"
                editable={false}
              />
            </Pressable>
            <View style={{marginTop: 16}}>
              <Input
                name="Lokasi Kejadian"
                placeholder="Masukkan lokasi kejadian"
                editable={true}
              />
            </View>
            <Pressable style={{marginTop: 16}}>
              <Input
                name="Waktu Kejadian"
                placeholder="Pilih Waktu"
                editable={false}
              />
            </Pressable>
            <View style={{marginTop: 16}}>
              <Input
                name="Kronologi"
                placeholder="Kronologi"
                editable={true}
                multiline={true}
                numberOfLines={2}
              />
            </View>
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
                Konfirmasi
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
});

export default LaporanScreen;
