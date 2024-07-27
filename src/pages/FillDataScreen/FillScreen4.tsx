import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import FillDataScreenLayout from '../../layouts/FillDataScreenLayout';
import {useRoute} from '@react-navigation/native';
import {CustomButton, Input} from '../../components';
import {getResponsive} from '../../utils';
import {APP} from '../../utils/CONSTANT';
import {Dropdown} from 'react-native-element-dropdown';
import {ChevronDown} from '../../assets/images';

const FillScreen4 = ({navigation}) => {
  const route = useRoute();
  const [isShow, setIsShow] = React.useState(false);

  const [inputByDropdown, setInputByDropdown] = React.useState([]);
  const [active, setActive] = React.useState(null);

  const dataDropdown = [
    {label: 'Ayah', value: 'Ayah'},
    {label: 'Ibu', value: 'Ibu'},
    {label: 'Suami', value: 'Suami'},
    {label: 'Istri', value: 'Istri'},
    {label: 'Anak', value: 'Anak'},
  ];

  function handleAddDropdownInput(e) {
    setInputByDropdown([
      ...inputByDropdown,
      {name: e.value, status_hidup: '', pekerjaan: '', no_hp: '', email: ''},
    ]);
    setIsShow(false);
  }

  return (
    <FillDataScreenLayout routeName={route.name}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={{color: '#222831', fontSize: 20, fontWeight: '600'}}>
            Data Keluarga
          </Text>
          <Text style={{color: '#222831'}}>
            Silahkan pilih dan masukan data keluarga di bawah ini
          </Text>
        </View>
        <View style={{marginTop: 16, gap: 16}}>
          {inputByDropdown.length > 0 &&
            inputByDropdown.map((item, index) => (
              <Pressable
                key={index}
                onPress={() =>
                  setActive(
                    active === item.name + index ? null : item.name + index,
                  )
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    backgroundColor: '#FFFFFF',
                    padding: 16,
                  }}>
                  <Text style={{color: '#222831'}}>{item.name}</Text>
                  <Image source={ChevronDown} />
                </View>
                {active === item.name + index && (
                  <View style={{paddingHorizontal: 16, paddingBottom: 16}}>
                    <Input name="Nama" placeholder="Masukkan Nama" />
                    <Text style={[styles.label, {marginTop: 8}]}>
                      Status Hidup
                    </Text>
                    <Dropdown
                      style={{
                        flex: 1,
                        height: 50,
                        paddingHorizontal: 16,
                        paddingVertical: 14,
                        borderRadius: 12,
                        backgroundColor: '#FCFCFC',
                        borderColor: '#ECECEC',
                        borderWidth: 1,
                        marginTop: 4,
                      }}
                      placeholderStyle={{fontSize: 13, color: '#BABCBF'}}
                      selectedTextStyle={{fontSize: 13, color: '#0C0E11'}}
                      data={[
                        {label: 'Hidup', value: 'Hidup'},
                        {label: 'Meninggal', value: 'Meninggal'},
                      ]}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={'Pilih Status Hidup'}
                      // value={values.jenis_kelamin}
                      onChange={item => {
                        console.log(item);
                        // setFieldValue('jenis_kelamin', item.value);
                      }}
                      containerStyle={{
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                      }}
                      itemTextStyle={{color: '#454545'}}
                    />
                    <View style={{marginTop: 8}}>
                      <Input
                        name="Pekerjaan"
                        placeholder="Masukkan Pekerjaan"
                      />
                    </View>
                    <View style={{marginTop: 8}}>
                      <Input name="Nomor Hp" placeholder="Masukkan Nomor Hp" />
                    </View>
                    <View style={{marginTop: 8}}>
                      <Input name="Email" placeholder="Masukkan Email" />
                    </View>
                  </View>
                )}
              </Pressable>
            ))}
          {/* {dropdown.length > 0 &&
            dropdown.map((item, index) => (
              
            ))} */}

          {!isShow && (
            <Pressable
              style={{marginHorizontal: 'auto'}}
              onPress={() => setIsShow(true)}>
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
          )}
          {isShow && (
            <Dropdown
              // key={index}
              style={{
                flex: 1,
                height: 50,
                paddingHorizontal: 16,
                paddingVertical: 14,
                borderRadius: 12,
                backgroundColor: '#FCFCFC',
                borderColor: '#ECECEC',
                borderWidth: 1,
              }}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={dataDropdown}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Pilih Data Keluarga'}
              // value={dropdown[index].name}
              // onFocus={() => setIsFocusMonth(true)}
              // onBlur={() => setIsFocusMonth(false)}
              onChange={handleAddDropdownInput}
              containerStyle={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
              itemTextStyle={{color: '#222831'}}
            />
          )}
        </View>
      </ScrollView>
      <CustomButton
        text="Selanjutnya"
        mt={getResponsive(40, 'height')}
        onPress={() => navigation.navigate('FillScreen3')}
      />
    </FillDataScreenLayout>
  );
};

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222831',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222831',
  },
  dropdown: error => ({
    flex: 1,
    height: 50,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#ECECEC',
    borderColor: '#ECECEC',
    borderWidth: 1,
    color: '#181818',
  }),
  label: {
    color: '#222831',
    fontWeight: '500',
  },
});

export default FillScreen4;
