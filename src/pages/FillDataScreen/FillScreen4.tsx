import {View, Text, Pressable, ScrollView} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';

const FillScreen4 = ({navigation}) => {
  const route = useRoute();
  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView>
        <View>
          <Text style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
            Data Keluarga
          </Text>
          <Text style={{color: '#222831'}}>
            Silahkan pilih dan masukan data keluarga di bawah ini
          </Text>
        </View>
        <View style={{marginTop: 16, gap: 16}}>
          <Pressable style={{marginHorizontal: 'auto'}}>
            <Text
              style={{
                color: APP.COLORS['primary-500'],
                fontWeight: '500',
                marginTop: 16,
                textAlign: 'center',
              }}>
              + Tambah
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      <CustomButton
        text="Selanjutnya"
        mt={getResponsive(40, 'height')}
        onPress={() => navigation.navigate('FillScreen5')}
      />
    </FillDataScreenLayout>
  );
};

export default FillScreen4;
