import React from 'react';
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {HomeActivity, HomeHeader, HomeMenus, ModalApp} from '../../components';
import {
  IconClose,
  IconFailPresence,
  IconModalLocation,
  IconModalRange,
  IconSuccessPresence,
} from '../../assets/images';
import {APP} from '../../utils/CONSTANT';
import {webView} from '../../utils/WebView';

const HomeScreen = () => {
  const [isModalLocation, setIsModalLocation] = React.useState(false);
  const [isModalRange, setIsModalRange] = React.useState(false);
  const [isModalSuccessPresence, setIsModalSuccessPresence] =
    React.useState(false);
  const [isModalFailPresence, setIsModalFailPresence] = React.useState(false);

  return (
    <>
      {isModalSuccessPresence && (
        <ModalApp isModal={isModalSuccessPresence}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={IconSuccessPresence} />
            <Text style={{marginTop: 16, fontSize: 16, fontWeight: 'bold'}}>
              Absen Telah Berhasil
            </Text>
            <Text style={{marginTop: 16, color: '#777986'}}>
              {` Kerja bagus! Kehadiran Anda telah
  berhasil dicatat. Anda sudah siap
                    untuk hari ini.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalSuccessPresence(false)}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: APP.COLORS['primary-500'],
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Selesai
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {isModalFailPresence && (
        <ModalApp isModal={isModalFailPresence}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={IconFailPresence} />
            <Text style={{marginTop: 16, fontSize: 16, fontWeight: 'bold'}}>
              Maaf Absensi Anda Tidak Berhasil
            </Text>
            <Text style={{marginTop: 16, color: '#777986'}}>
              {`      Maaf! Kehadiran Anda belum 
berhasil dicatat. Silahkan lakukan 
                  absensi ulang.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalFailPresence(false)}
                style={{
                  flex: 1,
                  borderRadius: 8,
                  paddingHorizontal: 16,
                  paddingVertical: 8,
                  backgroundColor: APP.COLORS['primary-500'],
                }}>
                <Text style={{color: '#FFFFFF', textAlign: 'center'}}>
                  Ulangi
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {isModalLocation && (
        <ModalApp isModal={isModalLocation}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => setIsModalLocation(false)}
              style={{marginLeft: 'auto', marginBottom: 16}}>
              <Image source={IconClose} />
            </Pressable>
            <Image source={IconModalLocation} style={{marginBottom: 16}} />
            <Text style={{color: '#0C0E11', fontWeight: 'bold'}}>
              Aktifkan Lokasi
            </Text>
            <Text style={{color: '#0C0E11', fontWeight: 'bold'}}>
              untuk Kehadiran Tanpa Hambatan
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalLocation(false)}
                style={[styles.button_modal, styles.button_modal_reject]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_reject]}>
                  Tidak
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setIsModalLocation(false)}
                style={[styles.button_modal, styles.button_modal_accept]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_accept]}>
                  Ya
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      {isModalRange && (
        <ModalApp isModal={isModalRange}>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => setIsModalRange(false)}
              style={{marginLeft: 'auto', marginBottom: 16}}>
              <Image source={IconClose} />
            </Pressable>
            <Image source={IconModalRange} style={{marginBottom: 16}} />
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              Anda berada di luar area kehadiran
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#777986',
                marginVertical: 8,
                textAlign: 'center',
              }}>
              {`Maaf, sepertinya Anda berada di
luar area absen. Untuk
melanjutkan, silakan lakukan 
dengan izin.`}
            </Text>
            <View style={styles.button_modal_container}>
              <Pressable
                onPress={() => setIsModalRange(false)}
                style={[styles.button_modal, styles.button_modal_accept]}>
                <Text
                  style={[styles.button_modal_text, styles.modal_text_accept]}>
                  Ijin Sekarang!
                </Text>
              </Pressable>
            </View>
          </View>
        </ModalApp>
      )}

      <View
        style={
          Platform.OS === 'web' ? styles.webView : styles.screen_container
        }>
        <ScrollView>
          <HomeHeader />
          <View style={styles.home_menu_container}>
            <HomeMenus />
            <HomeActivity />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  webView,
  screen_container: {
    flex: 1,
  },
  button_modal_container: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 16,
  },
  button_modal: {
    paddingVertical: 10,
    flex: 1,
    borderRadius: 8,
  },
  button_modal_reject: {
    borderColor: '#CA3D30',
    borderWidth: 1,
  },
  button_modal_accept: {
    backgroundColor: APP.COLORS['primary-500'],
  },
  button_modal_text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  modal_text_reject: {
    color: '#CA3D30',
  },
  modal_text_accept: {
    color: '#FFFFFF',
  },
  home_menu_container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: -10,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
