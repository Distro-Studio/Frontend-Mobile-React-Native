import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconCheck, IconCheckBig} from '../../assets/images';
import {Input, ModalApp} from '../../components';
import {AuthLayout} from '../../layouts';
import {APP} from '../../utils/CONSTANT';

const {height} = Dimensions.get('window');

const NewPasswordScreen = ({navigation}: any) => {
  const [error, setError] = React.useState(false);
  const [isModal, setIsModal] = React.useState(true);
  return (
    <>
      {isModal && (
        <ModalApp isModal={isModal}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={IconCheckBig} style={styles.modal_image} />
            <Text
              style={{
                fontSize: 24,
                color: '#222831',
                fontWeight: '700',
                textAlign: 'center',
                marginTop: 18,
                marginBottom: 8,
              }}>
              Yeay! Kata sandimu berhasil diperbarui.
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#222831',
                textAlign: 'center',
                lineHeight: 24,
              }}>
              {`Selamat! Kata sandimu sekarang 
sudah diperbarui. Akunmu kini lebih
terlindungi`}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 18}}>
              <Pressable
                onPress={() => {
                  setIsModal(false);
                  navigation.navigate('LoginScreen');
                }}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: APP.COLORS['primary-500'],
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Kembali ke Login
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}
      <AuthLayout headerText={false} type="NewPassword">
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 24,
              color: '#222831',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            Kata Sandi Baru
          </Text>
          <Text
            style={{
              marginTop: 8,
              marginBottom: 24,
              color: '#222831',
              textAlign: 'center',
            }}>
            Silahkan Masukan kata sandi baru dan kornfirmasi kata sandi baru
            anda dibawah ini
          </Text>
          <View style={styles.input_container}>
            <Input
              name="Kata Sandi"
              placeholder="Kata Sandi"
              type="password"
              // onChangeText={onChangePassword}
              // value={password}
            />
            <Input
              name="Kata Sandi"
              placeholder="Kata Sandi"
              type="password"
              // onChangeText={onChangePassword}
              // value={password}
            />
          </View>
          <View style={styles.check_container}>
            <View style={styles.check}>
              <Image source={IconCheck} />
              <Text style={styles.success}>Minimal 6 karakter</Text>
            </View>
            <View style={styles.check}>
              <Image source={IconCheck} />
              <Text style={styles.success}>Mengandung angka</Text>
            </View>
            <View style={styles.check}>
              <Image source={IconCheck} />
              <Text style={styles.success}>
                Mengandung simbol & karakter khusus
              </Text>
            </View>
            <View style={styles.check}>
              <Image source={IconCheck} />
              <Text style={styles.success}>Kata Sandi Cocok</Text>
            </View>
          </View>
          <Pressable
            disabled={error}
            onPress={() => setIsModal(true)}
            style={[
              styles.login_button,
              !error
                ? {backgroundColor: APP.COLORS['primary-500']}
                : {backgroundColor: '#E3E3E3'},
            ]}>
            <Text style={styles.login_button_text}>Lanjut</Text>
          </Pressable>
          <Text style={styles.app_ver}>App ver 1.0</Text>
        </View>
      </AuthLayout>
    </>
  );
};

const styles = StyleSheet.create({
  image_container: {
    // backgroundColor: 'red',
  },
  modal_image: {
    height: 120,
    width: 120,
  },
  app_ver: {
    textAlign: 'center',
    marginTop: 24,
    fontSize: 14,
  },
  login_button: {
    // backgroundColor: APP.COLORS['primary-500'],
    height: 40,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 24,
  },
  login_button_text: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  success: {
    color: '#37BA72',
  },
  fail: {
    color: '#FC4C3C',
  },
  check: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  check_container: {
    marginTop: 16,
    gap: 8,
  },
  input_container: {
    gap: 16,
  },
  container: {
    height: height * 0.65,
    padding: 24,
  },
});

export default NewPasswordScreen;
