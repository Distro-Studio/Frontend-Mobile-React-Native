import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IconNotificationBlack} from '../../assets/images';
import {CustomHeaderApp} from '../../components';
import PencilIcon from '../../assets/icons/icon-pencil.svg';
import CertificateIcon from '../../assets/icons/certificate-icon.svg';
import EmployeeIcon from '../../assets/icons/IconEmployee.svg';
import BrowserIcon from '../../assets/icons/browser-icon.svg';
import TermIcon from '../../assets/icons/term-icon.svg';
import HelpIcon from '../../assets/icons/help-icon.svg';
import ContactIcon from '../../assets/icons/contact-icon.svg';
import NotifyBlack from '../../assets/icons/activity-icon-black.svg';

const ProfileScreen = () => {
  const headerIcon = () => {
    return (
      <Pressable>
        <NotifyBlack />
        {/* <Image source={IconNotificationBlack} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Profil'}
        rightIcon={headerIcon()}
      />
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.card_container}>
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'red',
                borderRadius: 50,
              }}></View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <View style={{}}>
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Annette Black
                </Text>
                <Text style={{fontSize: 12, opacity: 0.4}}>
                  Project Manager
                </Text>
              </View>
              <View style={{}}>
                <PencilIcon />
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                backgroundColor: '#E3FCEE',
                paddingHorizontal: 21,
                paddingVertical: 4,
                borderTopLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}>
              <Text style={{fontSize: 12, color: '#37BA72'}}>
                Best Employee
              </Text>
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text>Account</Text>
            <View style={{gap: 8, marginTop: 8}}>
              <View style={styles.card_container}>
                <CertificateIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Penghargaan
                </Text>
              </View>
              <View style={styles.card_container}>
                <EmployeeIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Data Keluarga
                </Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 16}}>
            <Text>Others</Text>
            <View style={{gap: 8, marginTop: 8}}>
              <View style={styles.card_container}>
                <BrowserIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>Bahasa</Text>
              </View>
              <View style={styles.card_container}>
                <TermIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Term & COnditions
                </Text>
              </View>
              <View style={styles.card_container}>
                <HelpIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>Bantuan</Text>
              </View>
              <View style={styles.card_container}>
                <ContactIcon width={20} height={20} />
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  Kontak Kami
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            backgroundColor: '#FFE4E2',
            paddingVertical: 10,
            borderRadius: 8,
          }}>
          <Text style={{color: '#FC4C3C', textAlign: 'center'}}>Logout</Text>
        </Pressable>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card_container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    position: 'relative',
  },
  container: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 16,
    flex: 1,
  },
});

export default ProfileScreen;
