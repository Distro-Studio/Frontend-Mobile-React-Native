import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp, Input} from '../../components';
import {
  Camera,
  CircleArrowUp,
  File,
  Heart,
  History,
  SquareUser,
} from 'lucide-react-native';
import {APP} from '../../utils/CONSTANT';
import PersonalForm from './PersonalForm';
import FamilyForm from './FamilyForm';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet';
import BerkasForm from './BerkasForm';

const EditProfileScreen = ({navigation}) => {
  const [active, setActive] = React.useState('Personal');
  const [detailData, setDetailData] = React.useState<object>({});
  const [isDrawer, setIsDrawer] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);
  const [isAdd, setIsAdd] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(160, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);
  const rightHeaderIcon = () => {
    return (
      <Pressable onPress={() => navigation.navigate('HistoryProfileScreen')}>
        <History color={'black'} />
      </Pressable>
    );
  };
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        screenName={'Ubah Data Personal'}
        rightIcon={rightHeaderIcon()}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Pressable
            onPress={() => setActive('Personal')}
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <SquareUser size={16} color={'black'} />
            <Text style={{color: 'black'}}>Personal</Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Keluarga')}
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Heart size={16} color={'black'} />
            <Text style={{color: 'black'}}>Keluarga</Text>
          </Pressable>
          <Pressable
            onPress={() => setActive('Berkas')}
            style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <File size={16} color={'black'} />
            <Text style={{color: 'black'}}>Berkas</Text>
          </Pressable>
        </View>
      </CustomHeaderApp>
      <ScrollView style={styles.container}>
        <View
          style={{
            backgroundColor: '#bee3f8',
            padding: 8,
            borderRadius: 8,
            marginBottom: 16,
          }}>
          <Text style={{color: 'black', textAlign: 'justify', lineHeight: 20}}>
            Tekan <CircleArrowUp color={APP.COLORS['primary-500']} size={14} />{' '}
            untuk mengajukan perubahan data. Data di database tidak akan berubah
            jika tidak meneken tombol tersebut. Riwayat perubahan dapat dilihat
            di <CircleArrowUp color={APP.COLORS['primary-500']} size={14} />.
            Setiap permintaan perubahan data pada kolom yang sama akan
            menggantikan permintaan sebelumnya yang masih menunggu.
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 12,
            padding: 16,
          }}>
          {active === 'Personal' && <PersonalForm />}
          {active === 'Keluarga' && (
            <FamilyForm
              setDetailData={setDetailData}
              setIsDrawer={setIsDrawer}
              setIsDelete={setIsDelete}
              setIsAdd={setIsAdd}
            />
          )}
          {active === 'Berkas' && <BerkasForm />}
        </View>
      </ScrollView>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          {Object.keys(detailData).length > 0 &&
            isDelete === false &&
            isAdd === false && (
              <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
                <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                  Edit Data Keluarga
                </Text>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Hubungan Keluarga
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue={detailData.nama}
                    />
                  </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Nama
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue="Orewa John"
                    />
                  </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Status Hidup
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue="Orewa John"
                    />
                  </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Pekerjaan
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue="Orewa John"
                    />
                  </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Nomor Telepon
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue="Orewa John"
                    />
                  </View>
                </View>
                <View style={{marginTop: 16}}>
                  <Text style={{color: '#222831', fontWeight: '500'}}>
                    Email
                  </Text>
                  <View style={styles.input_wrapper}>
                    <TextInput
                      style={styles.input_container}
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#C5C5C5"
                      autoCapitalize="none"
                      defaultValue="Orewa John"
                    />
                  </View>
                </View>
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
                    Update
                  </Text>
                </Pressable>
              </View>
            )}
          {isDelete && (
            <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                Hapus Data Keluarga
              </Text>
              <Text style={{color: 'black', marginTop: 8}}>
                Apakah anda yakin akan menghapus data anggota keluarga ini{' '}
                <Text style={{fontWeight: '600'}}>{detailData.nama}</Text>
              </Text>
              <Pressable
                style={{
                  backgroundColor: '#E53E3E',
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
                  Hapus
                </Text>
              </Pressable>
            </View>
          )}
          {isAdd && isDelete === false && (
            <View style={{paddingHorizontal: 24, paddingVertical: 8}}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                Tambah Data Keluarga
              </Text>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>
                  Hubungan Keluarga
                </Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Hubungan"
                  />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>Nama</Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Nama"
                  />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>
                  Status Hidup
                </Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Status Hidup"
                  />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>
                  Pekerjaan
                </Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Pekerjaan"
                  />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>
                  Nomor Telepon
                </Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Nomor Telepon"
                  />
                </View>
              </View>
              <View style={{marginTop: 16}}>
                <Text style={{color: '#222831', fontWeight: '500'}}>Email</Text>
                <View style={styles.input_wrapper}>
                  <TextInput
                    style={styles.input_container}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#C5C5C5"
                    autoCapitalize="none"
                    placeholder="Masukkan Email"
                  />
                </View>
              </View>
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
                  Tambahkan
                </Text>
              </Pressable>
            </View>
          )}
        </CustomButtonSheet>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 16,
    paddingBottom: 16,
    flex: 1,
  },
  arrow_bg: {
    padding: 4,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
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

export default EditProfileScreen;
