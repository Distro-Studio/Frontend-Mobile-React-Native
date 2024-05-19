import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {
  CustomButton,
  CustomDatePicker,
  Input,
  ModalApp,
} from '../../components';
import {getResponsive} from '../../utils';
import {Formik} from 'formik';
import {object, string} from 'yup';
import APIEndpoints from '../../services/endpoints';
import {Dropdown} from 'react-native-element-dropdown';

const fillData1Schema = object({
  tempat_lahir: string().required(),
  tanggal_lahir: string().required(),
  nomor_telepon: string().required(),
  jenis_kelamin: string().required(),
});

const formData = new FormData();

const FillScreen1 = ({navigation}: any) => {
  const route = useRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = () => {
    hideDatePicker();
  };

  async function handleFillData(fields: any) {
    try {
      console.log('haloo');
      console.log(fields);
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
                  <Pressable onPress={showDatePicker}>
                    <Input
                      name="Tanggal Lahir"
                      editable={false}
                      placeholder="Masukkan Tanggal Lahir Anda"
                      onBlur={handleBlur('tanggal_lahir')}
                      value={values.tanggal_lahir}
                      error={errors.tanggal_lahir}
                    />
                  </Pressable>
                  {errors.tanggal_lahir && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.tanggal_lahir}
                    </Text>
                  )}
                  <Modal
                    animationType="fade"
                    transparent
                    visible={isDatePickerVisible}>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,.5)',
                        padding: 20,
                      }}>
                      <View
                        style={{
                          backgroundColor: '#FFFFFF',
                          paddingVertical: 16,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                        }}
                      />
                      <CustomDatePicker
                        modeCalendar="calendar"
                        onSelectedChange={(date: any) => {
                          handleConfirm();
                          setFieldValue('tanggal_lahir', date);
                        }}
                        style={{
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}
                      />
                    </View>
                  </Modal>
                  <Input
                    name="Nomor Telepon"
                    placeholder="Masukkan Nomor Telepon anda"
                    keyboardType="numeric"
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
                  {/* <Input
                    name="Jenis Kelamin"
                    placeholder="Pilih Jenis Kelamin"
                    type="text"
                    onChangeText={handleChange('jenis_kelamin')}
                    onBlur={handleBlur('jenis_kelamin')}
                    value={values.jenis_kelamin}
                    error={errors.jenis_kelamin}
                  /> */}
                  <Text style={styles.label}>Jenis Kelamin</Text>
                  <Dropdown
                    style={[styles.dropdown(errors.jenis_kelamin)]}
                    placeholderStyle={{fontSize: 13}}
                    data={[
                      {label: 'Laki-laki', value: 'Laki-laki'},
                      {label: 'Perempuan', value: 'Perempuan'},
                    ]}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={'Pilih Jenis Kelamin'}
                    value={values.jenis_kelamin}
                    onChange={item => {
                      setFieldValue('jenis_kelamin', item.value);
                    }}
                    containerStyle={{
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                    }}
                    itemTextStyle={{color: '#454545'}}
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

export default FillScreen1;
