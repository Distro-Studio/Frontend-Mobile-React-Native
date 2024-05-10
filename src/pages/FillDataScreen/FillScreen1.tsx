import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';

const FillScreen1 = ({navigation}) => {
  const route = useRoute();
  console.log(route);
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
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tempat Lahir"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tanggal Lahir"
            placeholder="Email"
            type="date"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Nomor Telepon"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Jenis Kelamin"
            placeholder="Email"
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
