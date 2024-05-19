import {View, Text, ScrollView, Pressable} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';
import {getResponsive} from '../../utils';
import {CustomButton, Input} from '../../components';
import {object, string} from 'yup';
import {Formik} from 'formik';
import APIEndpoints from '../../services/endpoints';

const fillData5Schema = object({
  nomor_str: string().required(),
  masa_berlaku_str: string().required(),
  nomor_sip: string().required(),
  masa_berlaku_sip: string().required(),
  bpjs_kesehatan: string().required(),
  bpjs_ketenagakerjaan: string().required(),
});

const formData = new FormData();

const FillScreen5 = ({navigation}: any) => {
  const route = useRoute();

  async function handleFillData(fields: any) {
    try {
      console.log('haloo');
      navigation.navigate('FillScreen6');
      // formData.append('nomor_str', fields.nomor_str);
      // formData.append('masa_berlaku_str', fields.masa_berlaku_str);
      // formData.append('nomor_sip', fields.nomor_sip);
      // formData.append('masa_berlaku_sip', fields.masa_berlaku_sip);
      // formData.append('bpjs_kesehatan', fields.bpjs_kesehatan);
      // formData.append('bpjs_ketenagakerjaan', fields.bpjs_ketenagakerjaan);

      // const response = await APIEndpoints.inputDataPersonal2(formData)

      // if(response.status === 200){

      // }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <FillDataScreenLayout routeName={route.name}>
      <Formik
        initialValues={{
          nomor_str: '',
          masa_berlaku_str: '',
          nomor_sip: '',
          masa_berlaku_sip: '',
          bpjs_kesehatan: '',
          bpjs_ketenagakerjaan: '',
        }}
        validationSchema={fillData5Schema}
        onSubmit={e => handleFillData(e)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <ScrollView>
              <View>
                <Text
                  style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
                  Berkas
                </Text>
              </View>
              <View style={{marginTop: 16, gap: 16}}>
                <Input
                  name="No. STR"
                  placeholder="Masukan Nomor STR"
                  keyboardType="numeric"
                  onChangeText={handleChange('nomor_str')}
                  onBlur={handleBlur('nomor_str')}
                  value={values.nomor_str}
                  error={errors.nomor_str}
                />
                {errors.nomor_str && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.nomor_str}
                  </Text>
                )}
                <Input
                  name="Masa Berlaku STR"
                  placeholder="Pilih Tanggal"
                  type="text"
                  onChangeText={handleChange('masa_berlaku_str')}
                  onBlur={handleBlur('masa_berlaku_str')}
                  value={values.masa_berlaku_str}
                  error={errors.masa_berlaku_str}
                />
                {errors.masa_berlaku_str && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.masa_berlaku_str}
                  </Text>
                )}
                <Input
                  name="No. SIP"
                  placeholder="Masukan Nomor SIP"
                  keyboardType="numeric"
                  onChangeText={handleChange('nomor_sip')}
                  onBlur={handleBlur('nomor_sip')}
                  value={values.nomor_sip}
                  error={errors.nomor_sip}
                />
                {errors.nomor_sip && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.nomor_sip}
                  </Text>
                )}
                <Input
                  name="Masa Berlaku SIP"
                  placeholder="Pilih Tanggal"
                  type="text"
                  onChangeText={handleChange('masa_berlaku_sip')}
                  onBlur={handleBlur('masa_berlaku_sip')}
                  value={values.masa_berlaku_sip}
                  error={errors.masa_berlaku_sip}
                />
                {errors.masa_berlaku_sip && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.masa_berlaku_sip}
                  </Text>
                )}
                <Input
                  name="BPJS Kesehatan"
                  placeholder="Masukan BPJS Kesehatan"
                  type="text"
                  onChangeText={handleChange('bpjs_kesehatan')}
                  onBlur={handleBlur('bpjs_kesehatan')}
                  value={values.bpjs_kesehatan}
                  error={errors.bpjs_kesehatan}
                />
                {errors.bpjs_kesehatan && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.bpjs_kesehatan}
                  </Text>
                )}
                <Input
                  name="BPJS Ketenagakerjaan"
                  placeholder="Masukan BPJS Ketenagakerjaan"
                  type="text"
                  onChangeText={handleChange('bpjs_ketenagakerjaan')}
                  onBlur={handleBlur('bpjs_ketenagakerjaan')}
                  value={values.bpjs_ketenagakerjaan}
                  error={errors.bpjs_ketenagakerjaan}
                />
                {errors.bpjs_ketenagakerjaan && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.bpjs_ketenagakerjaan}
                  </Text>
                )}
              </View>
            </ScrollView>
            <CustomButton
              text="Selanjutnya"
              mt={getResponsive(40, 'height')}
              onPress={() => handleSubmit()}
            />
          </>
        )}
      </Formik>
    </FillDataScreenLayout>
  );
};

export default FillScreen5;
