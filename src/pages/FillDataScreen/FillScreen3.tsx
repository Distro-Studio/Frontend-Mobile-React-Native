import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';
import {object, string} from 'yup';
import {Formik} from 'formik';
import APIEndpoints from '../../services/endpoints';

const fillData3Schema = object({
  ijazah_terakhir: string().required(),
  tahun_lulus: string().required(),
});

const formData = new FormData();

const FillScreen3 = ({navigation}: any) => {
  const route = useRoute();

  async function handleFillData(fields: any) {
    try {
      console.log('haloo');
      navigation.navigate('FillScreen4');

      // formData.append('ijazah_terakhir',fields.ijazah_terakhir)
      // formData.append('tahun_lulus',fields.tahun_lulus)

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
          ijazah_terakhir: '',
          tahun_lulus: '',
        }}
        validationSchema={fillData3Schema}
        onSubmit={e => handleFillData(e)}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <>
            <ScrollView>
              <View style={{marginTop: 16, gap: 16}}>
                <Input
                  name="Ijazah Terakhir"
                  placeholder="Masukan Ijazah Terakhir"
                  type="text"
                  onChangeText={handleChange('ijazah_terakhir')}
                  onBlur={handleBlur('ijazah_terakhir')}
                  value={values.ijazah_terakhir}
                  error={errors.ijazah_terakhir}
                />
                {errors.ijazah_terakhir && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.ijazah_terakhir}
                  </Text>
                )}
                <Input
                  name="Tahun Lulus"
                  placeholder="Masukan Tahun Lulus"
                  keyboardType="numeric"
                  maxLength={4}
                  onChangeText={handleChange('tahun_lulus')}
                  onBlur={handleBlur('tahun_lulus')}
                  value={values.tahun_lulus}
                  error={errors.tahun_lulus}
                />
                {errors.tahun_lulus && (
                  <Text style={{fontSize: 10, color: 'red'}}>
                    {errors.tahun_lulus}
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

export default FillScreen3;
