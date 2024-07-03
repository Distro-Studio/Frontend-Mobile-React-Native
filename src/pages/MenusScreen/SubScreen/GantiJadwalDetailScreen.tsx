import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../../components';
import CheckIcon from '../../../assets/icons/check-icon.svg';
import DeniedIcon from '../../../assets/icons/denied-icon.svg';

const GantiJadwalDetailScreen = () => {
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Detail Tukar Jadwal'} />
      <View style={styles.container}>
        <View
          style={{backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <View
              style={{
                width: 132,
                height: 132,
                backgroundColor: 'red',
                borderRadius: 100,
                marginHorizontal: 'auto',
              }}
            />
          </View>
          <View style={{gap: 16}}>
            <View>
              <Text style={{color: '#BABCBF', fontSize: 14}}>Nama</Text>
              <Text style={{color: '#0C0E11', fontSize: 16}}>Leo Kinn</Text>
            </View>
            <View>
              <Text style={{color: '#BABCBF', fontSize: 14}}>
                Nama Yang Ditukar
              </Text>
              <Text style={{color: '#0C0E11', fontSize: 16}}>Leo Kinn</Text>
            </View>
            <View>
              <Text style={{color: '#BABCBF', fontSize: 14}}>
                Tanggal Permintaan Tukar
              </Text>
              <Text style={{color: '#0C0E11', fontSize: 16}}>
                8 Desember 2023
              </Text>
            </View>
            <View>
              <Text style={{color: '#BABCBF', fontSize: 14}}>Tanggal</Text>
              <Text style={{color: '#0C0E11', fontSize: 16}}>
                4 Desember 2023
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: '#BABCBF', fontSize: 14}}>Status</Text>
                <Text style={{color: '#0C0E11', fontSize: 16}}>Pending</Text>
              </View>
              <View>
                <Text style={{color: '#BABCBF', fontSize: 14}}>
                  Disetujui Oleh
                </Text>
                <Text style={{color: '#0C0E11', fontSize: 16}}>
                  Waiting Approval
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#FFFFFF',
          padding: 24,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 16,
          // flex: 1,
          // marginHorizontal: 'auto',
        }}>
        <Pressable style={[styles.button, {backgroundColor: '#FC4C3C'}]}>
          <DeniedIcon />
          <Text style={{color: '#FFFFFF'}}>Tidak</Text>
        </Pressable>
        <Pressable style={[styles.button, {backgroundColor: '#37BA72'}]}>
          <CheckIcon />
          <Text style={{color: '#FFFFFF'}}>Setuju</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    borderRadius: 8,
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    paddingHorizontal: 24,
  },
});

export default GantiJadwalDetailScreen;
