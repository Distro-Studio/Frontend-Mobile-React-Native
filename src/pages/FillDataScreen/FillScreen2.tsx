import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {useRoute} from '@react-navigation/native';
import {getResponsive} from '../../utils';
import {object, string} from 'yup';
import {Formik} from 'formik';
import APIEndpoints from '../../services/endpoints';
import {Dropdown} from 'react-native-element-dropdown';

const fillData2Schema = object({
  nomor_induk_kependudukan: string().required(),
  nomor_kartu_keluarga: string().required(),
  agama: string().required(),
  golongan_darah: string().required(),
  tinggi_badan: string().required(),
  alamat: string().required(),
});

const formData = new FormData();

const FillScreen2 = ({navigation}: any) => {
  const route = useRoute();

  async function handleFillData(fields: any) {
    try {
      console.log('haloo');
      navigation.navigate('FillScreen3');

      // formData.append(
      //   'nomor_induk_kependudukan',
      //   fields.nomor_induk_kependudukan,
      // );
      // formData.append('nomor_kartu_keluarga', fields.nomor_kartu_keluarga);
      // formData.append('agama', fields.agama);
      // formData.append('golongan_darah', fields.golongan_darah);
      // formData.append('tinggi_badang', fields.tinggi_badang);
      // formData.append('alamat', fields.alamat);
      // const response = await APIEndpoints.inputDataPersonal2(formData);

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
          nomor_induk_kependudukan: '',
          nomor_kartu_keluarga: '',
          agama: '',
          golongan_darah: '',
          tinggi_badan: '',
          alamat: '',
        }}
        validationSchema={fillData2Schema}
        onSubmit={e => handleFillData(e)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
        }) => (
          <>
            <ScrollView>
              <View style={{marginTop: 16, gap: 16}}>
                <Input
                  name="Nomor Induk Kependudukan"
                  placeholder="Masukan Nomor Induk Kependudukan Anda"
                  keyboardType="numeric"
                  onChangeText={handleChange('nomor_induk_kependudukan')}
                  onBlur={handleBlur('nomor_induk_kependudukan')}
                  value={values.nomor_induk_kependudukan}
                  error={errors.nomor_induk_kependudukan}
                />
                {errors.nomor_induk_kependudukan && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.nomor_induk_kependudukan}
                  </Text>
                )}
                <Input
                  name="Nomor Kartu Keluarga"
                  placeholder="Masukan Nomor Kartu Keluarga Anda"
                  keyboardType="numeric"
                  onChangeText={handleChange('nomor_kartu_keluarga')}
                  onBlur={handleBlur('nomor_kartu_keluarga')}
                  value={values.nomor_kartu_keluarga}
                  error={errors.nomor_kartu_keluarga}
                />
                {errors.nomor_kartu_keluarga && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.nomor_kartu_keluarga}
                  </Text>
                )}
                {/* <Input
                  name="Agama"
                  placeholder="Pilih Agama"
                  type="text"
                  onChangeText={handleChange('agama')}
                  onBlur={handleBlur('agama')}
                  value={values.agama}
                  error={errors.agama}
                /> */}
                <Text style={styles.label}>Agama</Text>
                <Dropdown
                  style={[styles.dropdown(errors.agama)]}
                  data={[
                    {label: 'Buddha', value: 'Buddha'},
                    {label: 'Hindu', value: 'Hindu'},
                    {label: 'Islam', value: 'Islam'},
                    {label: 'Katholik', value: 'Katholik'},
                    {label: 'Konghucu', value: 'Konghucu'},
                    {label: 'Kristen', value: 'Kristen'},
                    {label: 'Lainnya', value: 'Lainnya'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Pilih Agama'}
                  value={values.agama}
                  onChange={item => {
                    setFieldValue('agama', item.value);
                  }}
                  containerStyle={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                  itemTextStyle={{color: '#454545'}}
                />
                {errors.agama && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.agama}
                  </Text>
                )}
                {/* <Input
                  name="Golongan Darah"
                  placeholder="Pilih Golongan Darah"
                  type="text"
                  onChangeText={handleChange('golongan_darah')}
                  onBlur={handleBlur('golongan_darah')}
                  value={values.golongan_darah}
                  error={errors.golongan_darah}
                /> */}
                <Text style={styles.label}>Golongan Darah</Text>
                <Dropdown
                  style={[styles.dropdown(errors.golongan_darah)]}
                  data={[
                    {label: 'A', value: 'A'},
                    {label: 'B', value: 'B'},
                    {label: 'AB', value: 'AB'},
                    {label: 'O', value: 'O'},
                  ]}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={'Pilih Golongan Darah'}
                  value={values.golongan_darah}
                  onChange={item => {
                    setFieldValue('golongan_darah', item.value);
                  }}
                  containerStyle={{
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                  }}
                  itemTextStyle={{color: '#454545'}}
                />
                {errors.golongan_darah && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.golongan_darah}
                  </Text>
                )}
                <Input
                  name="Tinggi Badan"
                  placeholder="Masukan Tinggi Badan Anda"
                  keyboardType="numeric"
                  onChangeText={handleChange('tinggi_badan')}
                  onBlur={handleBlur('tinggi_badan')}
                  value={values.tinggi_badan}
                  error={errors.tinggi_badan}
                  maxLength={3}
                />
                {errors.tinggi_badan && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.tinggi_badan}
                  </Text>
                )}
                <Input
                  name="Alamat"
                  placeholder="Masukkan Alamat Anda"
                  type="text"
                  onChangeText={handleChange('alamat')}
                  onBlur={handleBlur('alamat')}
                  value={values.alamat}
                  error={errors.alamat}
                />
                {errors.alamat && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.alamat}
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

const styles = StyleSheet.create({
  dropdown: error => ({
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#FCFCFC',
    borderColor: error ? 'red' : '#ECECEC',
    borderWidth: 1,
    color: '#181818',
  }),
  label: {
    color: '#222831',
    fontWeight: '500',
  },
});

export default FillScreen2;
