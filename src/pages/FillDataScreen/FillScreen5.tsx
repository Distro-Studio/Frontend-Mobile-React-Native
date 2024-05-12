import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';
import {getResponsive} from '../../utils';
import {CustomButton, Input} from '../../components';

const FillScreen5 = ({navigation}) => {
  const route = useRoute();
  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View>
          <Text style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
            Berkas
          </Text>
        </View>
        <View style={{marginTop: 16, gap: 16}}>
          <Input
            name="No. STR"
            placeholder="Masukan Nomor STR"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Masa Berlaku STR"
            placeholder="Pilih Tanggal"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="No. SIP"
            placeholder="Masukan Nomor SIP"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Masa Berlaku SIP"
            placeholder="Pilih Tanggal"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="BPJS Kesehatan"
            placeholder="Masukan BPJS Kesehatan"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="BPJS Ketenagakerjaan"
            placeholder="Masukan BPJS Ketenagakerjaan"
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
        onPress={() => navigation.navigate('FillScreen6')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen5;
