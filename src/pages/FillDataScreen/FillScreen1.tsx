import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';

const FillScreen1 = ({navigation}) => {
  const route = useRoute();
  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View>
          <Text style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
            Personal Data
          </Text>
          <Text style={{color: '#222831'}}>
            Sebelum menggunakan aplikasi anda wajib mengisi data di bawah ini
          </Text>
        </View>
        <View style={{marginTop: 16, gap: 16}}>
          <Input
            name="Nama Lengkap"
            value={'Ivan Ardiansyah'}
            // placeholder="Email"
            type="text"
            customStyle={false}
            disabled={true}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tempat Lahir"
            placeholder="Masukkan Tempat Lahir anda"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tanggal Lahir"
            placeholder="Masukkan Tanggal Lahir anda"
            type="date"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Nomor Telepon"
            placeholder="Masukkan Nomor Telepon anda"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Jenis Kelamin"
            placeholder="Pilih Jenis Kelamin"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
        </View>
      </ScrollView>
      <CustomButton
        text="Selanjutnya"
        mt={getResponsive(40, 'height')}
        onPress={() => navigation.navigate('FillScreen2')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen1;
