import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {useRoute} from '@react-navigation/native';
import {getResponsive} from '../../utils';

const FillScreen2 = ({navigation}) => {
  const route = useRoute();
  console.log(route);
  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View style={{marginTop: 16, gap: 16}}>
          <Input
            name="Nomor Induk Kependudukan"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Nomor Kartu Keluarga"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Agama"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Golongan Darah"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tinggi Badan"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Alamat"
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
        onPress={() => navigation.navigate('FillScreen3')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen2;
