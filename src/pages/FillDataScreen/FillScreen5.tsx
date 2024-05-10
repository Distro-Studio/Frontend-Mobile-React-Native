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
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Masa Berlaku STR"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="No. SIP"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Masa Berlaku SIP"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="BPJS Kesehatan"
            placeholder="Email"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="BPJS Ketenagakerjaan"
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
        onPress={() => navigation.navigate('FillScreen6')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen5;
