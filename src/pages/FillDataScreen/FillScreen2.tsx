import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {useRoute} from '@react-navigation/native';
import {getResponsive} from '../../utils';

const FillScreen2 = ({navigation}) => {
  const route = useRoute();

  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View style={{marginTop: 16, gap: 16}}>
          <Input
            name="Nomor Induk Kependudukan"
            placeholder="Masukan Nomor Induk Kependudukan Anda"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Nomor Kartu Keluarga"
            placeholder="Masukan Nomor Kartu Keluarga Anda"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Agama"
            placeholder="Pilih Agama"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Golongan Darah"
            placeholder="Pilih Golongan Darah"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tinggi Badan"
            placeholder="Masukan Tinggi Badan Anda"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Alamat"
            placeholder="Masukkan Alamat Anda"
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
        onPress={() => navigation.navigate('FillScreen3')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen2;
