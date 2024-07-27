import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import {CustomButton} from '../../components';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useAppDispatch} from '../../redux';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';
import DocumentPicker from 'react-native-document-picker';
import {setAttendanceState} from '../../redux/attendanceSlice';
import {setAuthState} from '../../redux/authSlice';

const FillScreen6 = ({navigation}) => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const [fileKTP, setFileKTP] = React.useState(null);
  const [fileKK, setFileKK] = React.useState(null);
  const [fileSIP, setFileSIP] = React.useState(null);
  const [fileBPJSKesehatan, setFileBPJSKesehatan] = React.useState(null);
  const [fileBPJSKetenagakerjaan, setFileBPJSKetenagakerjaan] =
    React.useState(null);
  const [fileSertifikat, setFileSertifikat] = React.useState(null);

  const pickDocument = async type => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      switch (type) {
        case 'KTP':
          return setFileKTP(res);
        case 'KK':
          return setFileKK(res);
        case 'SIP':
          return setFileSIP(res);
        case 'BPJS Kesehatan':
          return setFileBPJSKesehatan(res);
        case 'BPJS Ketenagakerjaan':
          return setFileBPJSKetenagakerjaan(res);
        case 'Sertifikat':
          return setFileSertifikat(res);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };

  console.log(fileKTP);

  async function storeLoggedIn(value: string) {
    try {
      dispatch(setAuthState({logged_in: true}));
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
              onPress={() => pickDocument('KTP')}
              style={{
                paddingHorizontal: 16,
                paddingVertical: 14,
                height: 48,
                borderRadius: 12,
                backgroundColor: '#FFFFFF',
                borderColor: APP.COLORS['primary-500'],
                borderWidth: 1,
                borderStyle: 'dashed',
                // overflow: 'scroll',
              }}>
              {!fileKTP && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileKTP && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileKTP[0]?.name}
                </Text>
              )}
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              Kartu Keluarga
            </Text>
            <Pressable
              onPress={() => pickDocument('KK')}
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
              {!fileKK && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileKK && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileKK[0]?.name}
                </Text>
              )}
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              SIP
            </Text>
            <Pressable
              onPress={() => pickDocument('SIP')}
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
              {!fileSIP && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileSIP && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileSIP[0]?.name}
                </Text>
              )}
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              BPJS Kesehatan
            </Text>
            <Pressable
              onPress={() => pickDocument('BPJS Kesehatan')}
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
              {!fileBPJSKesehatan && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileBPJSKesehatan && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileBPJSKesehatan[0]?.name}
                </Text>
              )}
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              BPJS Ketenagakerjaan
            </Text>
            <Pressable
              onPress={() => pickDocument('BPJS Ketenagakerjaan')}
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
              {!fileBPJSKetenagakerjaan && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileBPJSKetenagakerjaan && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileBPJSKetenagakerjaan[0]?.name}
                </Text>
              )}
            </Pressable>
          </View>
          <View>
            <Text
              style={{color: '#222831', fontWeight: '500', marginBottom: 8}}>
              Sertifikat Kompetensi
            </Text>
            <Pressable
              onPress={() => pickDocument('Sertifikat')}
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
              {!fileSertifikat && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  Pilih File
                </Text>
              )}
              {fileSertifikat && (
                <Text
                  style={{
                    color: APP.COLORS['primary-500'],
                    textAlign: 'center',
                  }}>
                  {fileSertifikat[0]?.name}
                </Text>
              )}
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
