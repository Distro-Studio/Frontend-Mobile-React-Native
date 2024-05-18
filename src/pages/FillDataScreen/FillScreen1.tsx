import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';
import {Formik} from 'formik';
import {object, string} from 'yup';
import APIEndpoints from '../../services/endpoints';

const fillData1Schema = object({
  tempat_lahir: string().required(),
  tanggal_lahir: string().required(),
  nomor_telepon: string().required(),
  jenis_kelamin: string().required(),
});

const formData = new FormData();

const FillScreen1 = ({navigation}: any) => {
  const route = useRoute();

  async function handleFillData(fields: any) {
    try {
      // formData.append('tempat_lahir', fields.tempat_lahir);
      // formData.append('tanggal_lahir', fields.tanggal_lahir);
      // formData.append('nomor_telepon', fields.nomor_telepon);
      // formData.append('jenis_kelamin', fields.jenis_kelamin);
      // const response = await APIEndpoints.inputDataPersonal1(formData);
      // if(response.status === 200){

      // }

      navigation.navigate('FillScreen2');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <FillDataScreenLayout routeName={route.name}>
      <Formik
        initialValues={{
          tempat_lahir: '',
          tanggal_lahir: '',
          nomor_telepon: '',
          jenis_kelamin: '',
        }}
        validationSchema={fillData1Schema}
        onSubmit={e => handleFillData(e)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <ScrollView>
              <View>
                <Text
                  style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
                  Personal Data
                </Text>
                <Text style={{color: '#222831'}}>
                  Sebelum menggunakan aplikasi anda wajib mengisi data di bawah
                  ini
                </Text>
              </View>
              <View style={{marginTop: 16, gap: 16}}>
                <>
                  <Input
                    name="Nama Lengkap"
                    value={'Ivan Ardiansyah'}
                    type="text"
                    disabled={true}
                  />
                  <Input
                    name="Tempat Lahir"
                    placeholder="Masukkan Tempat Lahir anda"
                    type="text"
                    onChangeText={handleChange('tempat_lahir')}
                    onBlur={handleBlur('tempat_lahir')}
                    value={values.tempat_lahir}
                    error={errors.tempat_lahir}
                  />
                  {errors.tempat_lahir && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.tempat_lahir}
                    </Text>
                  )}
                  <Input
                    name="Tanggal Lahir"
                    placeholder="Masukkan Tanggal Lahir anda"
                    type="date"
                    onChangeText={handleChange('tanggal_lahir')}
                    onBlur={handleBlur('tanggal_lahir')}
                    value={values.tanggal_lahir}
                    error={errors.tanggal_lahir}
                  />
                  {errors.tanggal_lahir && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.tanggal_lahir}
                    </Text>
                  )}
                  <Input
                    name="Nomor Telepon"
                    placeholder="Masukkan Nomor Telepon anda"
                    type="text"
                    onChangeText={handleChange('nomor_telepon')}
                    onBlur={handleBlur('nomor_telepon')}
                    value={values.nomor_telepon}
                    error={errors.nomor_telepon}
                  />
                  {errors.nomor_telepon && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.nomor_telepon}
                    </Text>
                  )}
                  <Input
                    name="Jenis Kelamin"
                    placeholder="Pilih Jenis Kelamin"
                    type="text"
                    onChangeText={handleChange('jenis_kelamin')}
                    onBlur={handleBlur('jenis_kelamin')}
                    value={values.jenis_kelamin}
                    error={errors.jenis_kelamin}
                  />
                  {errors.jenis_kelamin && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.jenis_kelamin}
                    </Text>
                  )}
                </>
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

export default FillScreen1;
