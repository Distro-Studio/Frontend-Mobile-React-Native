import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';

const FillScreen3 = ({navigation}) => {
  const route = useRoute();

  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View style={{marginTop: 16, gap: 16}}>
          <Input
            name="Ijazah Terakhir"
            placeholder="Masukan Ijazah Terakhir"
            type="text"
            customStyle={false}
            // onChangeText={onChangeEmail}
            // value={email}
            // customStyle={isEmailError}
          />
          <Input
            name="Tahun Lulus"
            placeholder="Masukan Tahun Lulus"
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
        onPress={() => navigation.navigate('FillScreen4')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen3;
