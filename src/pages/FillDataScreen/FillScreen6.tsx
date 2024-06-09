import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {CustomButton} from '../../components';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useAppDispatch} from '../../redux';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';
import {setAttendanceState} from '../../redux/attendanceSlice';
import {setAuthState} from '../../redux/authSlice';

const FillScreen6 = ({navigation}) => {
  const route = useRoute();
  const dispatch = useAppDispatch();

  async function storeLoggedIn(value: string) {
    try {
      dispatch(setAuthState(true));
      // await AsyncStorage.setItem('logged_in', value);
    } catch (e) {
      // saving error
    }
  }

  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
            Upload Berkas
          </Text>
        </View>
        <View style={{marginTop: 16, gap: 16}}>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              KTP
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              Kartu Keluarga
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              SIP
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              BPJS Kesehatan
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              BPJS Ketenagakerjaan
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              Sertifikat Kompetensi
            </Text>
            <Pressable
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
              }}>
              <Text
                style={{color: APP.COLORS['primary-500'], textAlign: 'center'}}>
                Pilih File
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <CustomButton
        text="Simpan"
        mt={getResponsive(40, 'height')}
        onPress={() => {
          console.log('halo');
          navigation.navigate('MainApp');
          storeLoggedIn('logged_in');
        }}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen6;
