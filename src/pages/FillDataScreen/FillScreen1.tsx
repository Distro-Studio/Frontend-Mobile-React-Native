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
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import SingleDatePicker from '../../components/CustomNewDatePicker/SingleDatePicker';
import {APP} from '../../utils/CONSTANT';

const fillData1Schema = object({
  tempat_lahir: string().required('Tempat lahir harus diisi!'),
  // tanggal_lahir: string().required('Tanggal lahir harus diisi!'),
  nomor_telepon: string().required('Nomor telepon harus diisi!'),
  jenis_kelamin: string().required('Jenis kelamin harus diisi!'),
  nomor_induk_kependudukan: string().required('NIK harus diisi!'),
  nomor_kartu_keluarga: string().required('NKK harus diisi!'),
  agama: string().required('Agama harus diisi!'),
  golongan_darah: string().required('Golongan darah harus diisi!'),
  tinggi_badan: string().required('Tinggi badan harus diisi!'),
  alamat: string().required('Alamat harus diisi!'),
  ijazah_terakhir: string().required('Ijazah harus diisi!'),
  tahun_lulus: string().required('Tahun lulus harus diisi!'),
});

const formData = new FormData();

const FillScreen1 = ({navigation}: any) => {
  const route = useRoute();
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(160, 'height')], []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = () => {
    hideDatePicker();
  };

  const bottomSheetDatePickerRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChangesDatePicker = React.useCallback((index: number) => {
    setDatePickerVisibility(index === -1 ? false : true);
  }, []);

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
  console.log(isDatePickerVisible);
  return (
    <>
      <FillDataScreenLayout routeName={route.name}>
        <Formik
          initialValues={{
            tempat_lahir: '',
            // tanggal_lahir: '',
            nomor_telepon: '',
            jenis_kelamin: '',
            nomor_induk_kependudukan: '',
            nomor_kartu_keluarga: '',
            agama: '',
            golongan_darah: '',
            tinggi_badan: '',
            alamat: '',
            ijazah_terakhir: '',
            tahun_lulus: '',
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
              <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                  <Text
                    style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
                    Personal Data
                  </Text>
                  <Text style={{color: '#222831'}}>
                    Sebelum menggunakan aplikasi anda wajib mengisi data di
                    bawah ini
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
                    <Text style={styles.label}>Jenis Kelamin</Text>
                    <Dropdown
                      style={[styles.dropdown(errors.jenis_kelamin)]}
                      placeholderStyle={{fontSize: 13, color: '#BABCBF'}}
                      selectedTextStyle={{fontSize: 13, color: '#0C0E11'}}
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
                    <Text style={styles.label}>Agama</Text>
                    <Dropdown
                      style={[styles.dropdown(errors.agama)]}
                      placeholderStyle={{fontSize: 13, color: '#BABCBF'}}
                      selectedTextStyle={{fontSize: 13, color: '#0C0E11'}}
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
                    <Text style={styles.label}>Golongan Darah</Text>
                    <Dropdown
                      style={[styles.dropdown(errors.golongan_darah)]}
                      placeholderStyle={{fontSize: 13, color: '#BABCBF'}}
                      selectedTextStyle={{fontSize: 13, color: '#0C0E11'}}
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
      {isDatePickerVisible && (
        <CustomButtonSheet
          sheetRef={bottomSheetDatePickerRef}
          handleSheetChanges={handleSheetChangesDatePicker}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}>
            <SingleDatePicker />
            <Pressable
              style={{
                backgroundColor: APP.COLORS['primary-500'],
                flex: 1,
                padding: 8,
                borderRadius: 8,
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 24,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: '700',
                }}>
                Konfirmasi
              </Text>
            </Pressable>
          </View>
        </CustomButtonSheet>
      )}
    </>
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
