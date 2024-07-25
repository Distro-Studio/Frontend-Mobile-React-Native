import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Camera, CircleArrowUp} from 'lucide-react-native';
import {APP} from '../../utils/CONSTANT';
import {TextInput} from 'react-native-gesture-handler';

const PersonalForm = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}>
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 50,
            backgroundColor: 'red',
            position: 'relative',
          }}>
          <View style={styles.camera}>
            <Camera color={'#FFFFFF'} size={20} />
          </View>
        </View>
        <View style={{flex: 1}}>
          <Text style={{color: 'black'}}>User1</Text>
          <Text style={{color: 'black', opacity: 0.4, fontSize: 12}}>
            User1
          </Text>
        </View>
        <View style={styles.arrow_bg}>
          <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
        </View>
      </View>
      {/* form */}
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Tempat Lahir</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Tanggal Lahir</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Nomor Telepon</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Jenis Kelamin</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>
          Nomor Induk Kependudukan
        </Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>
          Nomor Kartu Keluarga
        </Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Agama</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>
          Golongan Darah
        </Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Tinggi Badan</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>Alamat</Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={[styles.input_container, {height: 'auto'}]}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
            multiline={true}
            numberOfLines={2}
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>
          Nomor Ijazah Terakhir
        </Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
      <View style={{marginTop: 16}}>
        <Text style={{color: '#222831', fontWeight: '500'}}>
          Tahun Lulus Ijazah Terakhir
        </Text>
        <View style={styles.input_wrapper}>
          <TextInput
            style={styles.input_container}
            underlineColorAndroid="transparent"
            placeholderTextColor="#C5C5C5"
            autoCapitalize="none"
            defaultValue="Orewa John"
          />
          <View style={styles.arrow_bg}>
            <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  arrow_bg: {
    padding: 4,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  camera: {
    width: 28,
    height: 28,
    backgroundColor: APP.COLORS['primary-500'],
    borderRadius: 50,
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input_container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    height: 40,
    borderRadius: 8,
    borderColor: '#ECECEC',
    borderWidth: 1,
    color: '#181818',
    flex: 1,
  },
  input_wrapper: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
});

export default PersonalForm;
