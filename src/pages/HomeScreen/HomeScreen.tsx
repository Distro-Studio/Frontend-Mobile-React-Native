import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {APP} from '../../utils/CONSTANT';
import {
  HeaderHome,
  HeaderUserProfile,
  IconActivityIn,
  IconActivityOut,
  IconAttendance,
  IconAttendanceIn,
  IconAttendanceOut,
  IconAttendanceTotal,
  IconCuti,
  IconDokumen,
  IconIjin,
  IconKoperasi,
  IconLaporan,
  IconLembur,
  IconLocation,
  IconNotification,
  IconSlipGaji,
  IconTukarJadwal,
} from '../../assets/images';

const HomeScreen = () => {
  return (
    <View style={styles.screen_container}>
      <ScrollView>
        <View style={styles.header_container}>
          <Image source={HeaderHome} style={{position: 'absolute'}} />
          <View style={styles.header_profile}>
            <View style={styles.header_profile_container}>
              <Image
                source={HeaderUserProfile}
                style={styles.header_profile_image}
              />
              <View style={styles.header_profile_info}>
                <Text style={styles.header_profile_info_name}>
                  Bayu Prasetya Adji S.
                </Text>
                <Text style={styles.header_profile_info_role}>
                  Product Designer
                </Text>
              </View>
            </View>
            <Image source={IconNotification} style={{width: 24, height: 24}} />
          </View>
          <View style={styles.header_attendance_container}>
            <Text style={styles.header_attendance_time}>07.40</Text>
            <Text style={styles.header_attendance_date}>
              Senin, 04 Maret 2024
            </Text>
            <View style={styles.header_attendance}>
              <Image source={IconAttendance} style={{marginBottom: 8}} />
              <Text style={{color: '#0C0E11', fontWeight: '700'}}>Masuk</Text>
            </View>
            <View style={styles.header_location_container}>
              <Image source={IconLocation} />
              <Text style={{color: '#F5F5F5'}}>
                Jl. Majapahit No. 24, Semarang
              </Text>
            </View>
          </View>
          <View style={styles.header_attendance_time_container}>
            <View style={styles.attendance_container}>
              <View style={{maxHeight: 32, maxWidth: 32}}>
                <Image
                  source={IconAttendanceIn}
                  style={{resizeMode: 'cover'}}
                />
              </View>
              <Text style={styles.header_attendance_time_text}>07.40</Text>
              <Text style={styles.header_attendance_time_status}>Masuk</Text>
            </View>
            <View style={styles.attendance_container}>
              <View style={{maxHeight: 32, maxWidth: 32}}>
                <Image
                  source={IconAttendanceOut}
                  style={{resizeMode: 'cover'}}
                />
              </View>
              <Text style={styles.header_attendance_time_text}>16.40</Text>
              <Text style={styles.header_attendance_time_status}>Keluar</Text>
            </View>
            <View style={styles.attendance_container}>
              <View style={{maxHeight: 32, maxWidth: 32}}>
                <Image
                  source={IconAttendanceTotal}
                  style={{resizeMode: 'cover'}}
                />
              </View>
              <Text style={styles.header_attendance_time_text}>09h00m</Text>
              <Text style={styles.header_attendance_time_status}>
                Jam Kerja
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.home_menu_container}>
          <View style={styles.home_menus}>
            <View style={styles.home_menu}>
              <Image source={IconCuti} />
              <Text style={styles.home_menu_text}>Cuti</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconTukarJadwal} />
              <Text style={styles.home_menu_text}>Tukar Jadwal</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconLembur} />
              <Text style={styles.home_menu_text}>Lembur</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconIjin} />
              <Text style={styles.home_menu_text}>Ijin</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconSlipGaji} />
              <Text style={styles.home_menu_text}>Slip Gajiku</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconDokumen} />
              <Text style={styles.home_menu_text}>Dokumen</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconKoperasi} />
              <Text style={styles.home_menu_text}>Koperasi</Text>
            </View>
            <View style={styles.home_menu}>
              <Image source={IconLaporan} />
              <Text style={styles.home_menu_text}>Laporan</Text>
            </View>
          </View>
          <View style={styles.menu_pagination_container}>
            <View style={styles.menu_pagination_active}></View>
            <View style={styles.menu_pagination}></View>
          </View>
          <View style={styles.activity_container}>
            <Text style={styles.activity_text_title}>Your Activity</Text>
            <View style={styles.activity_card}>
              <View style={styles.activity_status}>
                <Image source={IconActivityIn} />
                <View>
                  <Text
                    style={{color: '#222831', fontSize: 16, fontWeight: '600'}}>
                    Masuk
                  </Text>
                  <Text
                    style={{color: '#BABCBF', fontSize: 14, fontWeight: '400'}}>
                    01 November 2023
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#222831'}}>
                07.30
              </Text>
            </View>
            <View style={styles.activity_card}>
              <View style={styles.activity_status}>
                <Image source={IconActivityOut} />
                <View>
                  <Text
                    style={{color: '#222831', fontSize: 16, fontWeight: '600'}}>
                    Keluar
                  </Text>
                  <Text
                    style={{color: '#BABCBF', fontSize: 14, fontWeight: '400'}}>
                    01 November 2023
                  </Text>
                </View>
              </View>
              <Text style={{fontSize: 16, fontWeight: '600', color: '#222831'}}>
                07.30
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  menu_pagination_container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
  },
  menu_pagination: {
    width: 6,
    height: 6,
    borderRadius: 12,
    backgroundColor: '#FFE7D9',
  },
  menu_pagination_active: {
    width: 24,
    height: 6,
    borderRadius: 12,
    backgroundColor: APP.COLORS['primary-500'],
  },
  screen_container: {
    flex: 1,
  },
  header_container: {
    width,
    height: height * 0.55,
    backgroundColor: APP.COLORS['primary-500'],
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  header_profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_profile_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  header_profile_image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  header_profile_info: {
    gap: 2,
  },
  header_profile_info_name: {
    fontWeight: 'bold',
    color: '#F5F5F5',
    fontSize: 16,
  },
  header_profile_info_role: {
    color: '#F1F2F3',
    fontSize: 14,
  },
  header_attendance_container: {
    marginTop: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_attendance_time: {
    fontSize: 24,
    color: '#F5F5F5',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header_attendance_date: {
    color: '#F5F5F5',
    fontSize: 14,
    textAlign: 'center',
  },
  header_attendance: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    width: 118,
    height: 118,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  header_location_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 24,
  },
  header_attendance_time_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 24,
    // flex: 1,
  },
  attendance_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_attendance_time_text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F5F5F5',
    marginTop: 8,
  },
  header_attendance_time_status: {
    fontSize: 12,
    fontWeight: '400',
    color: '#F5F5F5',
  },
  home_menu_container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    marginTop: -10,
    paddingHorizontal: 24,
  },
  home_menus: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 8,
    marginTop: 24,
  },
  home_menu: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 8,
    width: 73.5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
  home_menu_text: {
    textAlign: 'center',
    fontSize: 12,
    color: '#222831',
  },
  activity_container: {
    marginTop: 24,
    paddingBottom: 16,
  },
  activity_text_title: {
    color: '#0C0E11',
    fontSize: 16,
    fontWeight: '600',
  },
  activity_card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  activity_status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default HomeScreen;
