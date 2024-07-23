import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {Search, Settings2} from 'lucide-react-native';
import {getResponsive} from '../../utils';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {APP} from '../../utils/CONSTANT';

const PengumumanScreen = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const snapPoints = React.useMemo(() => [getResponsive(250, 'height')], []);
  // ref
  const bottomSheetRef = React.useRef<BottomSheet>(null);
  // callbacks
  const handleSheetChanges = React.useCallback((index: number) => {
    setIsDrawer(index === -1 ? false : true);
  }, []);
  const headerIcon = () => {
    return (
      <Pressable onPress={() => setIsSearch(true)}>
        <Search size={20} color={'black'} />
        {/* <Image source={IconSearch} style={{width: 20, height: 20}} /> */}
      </Pressable>
    );
  };
  const SearchForm = React.useCallback(() => {
    return (
      <View
        style={{
          flex: 1,
          borderColor: '#E3E3E3',
          borderWidth: 1,
          borderRadius: 8,
          paddingVertical: 0,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          gap: 4,
        }}>
        <Search size={20} color={'black'} />
        <TextInput
          placeholder="Search"
          style={{
            width: '100%',
            paddingVertical: 2,
            color: 'black',
          }}
        />
      </View>
    );
  }, []);
  return (
    <>
      <CustomHeaderApp
        backButton={true}
        rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Pengumuman'}
      />
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3]}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <Pressable
              onPress={() => setIsDrawer(true)}
              style={{
                backgroundColor: '#FFFFFF',
                padding: 16,
                borderRadius: 8,
              }}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                Pengumuman Libur Nasional
              </Text>
              <Text
                style={{color: 'black', marginVertical: 8}}
                numberOfLines={2}>
                Dalam rangka memperingati hari libur nasional, kantor akan tutup
                pada tanggal 17 Agustus. Hari libur ini diperingati sebagai Hari
                Kemerdekaan Indonesia dan merupakan hari yang sangat penting
                bagi bangsa kita. Semua karyawan diharapkan untuk mengibarkan
                bendera merah putih di rumah masing-masing dan mengikuti upacara
                peringatan secara virtual atau di lokasi yang telah ditentukan
                oleh pemerintah setempat. Selain itu, kami juga menganjurkan
                para karyawan untuk menggunakan hari libur ini sebagai waktu
                untuk beristirahat dan menghabiskan waktu bersama keluarga.
                Liburan ini adalah kesempatan yang baik untuk merayakan
                pencapaian negara kita dan juga untuk merenungkan sejarah
                perjuangan kemerdekaan. Kantor akan kembali beroperasi normal
                pada hari berikutnya. Harap memastikan semua pekerjaan penting
                diselesaikan sebelum tanggal 17 Agustus. Terima kasih atas
                perhatian dan kerja sama Anda. Selamat merayakan Hari
                Kemerdekaan!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#000000', fontSize: 12, opacity: 0.4}}>
                  21 hari lalu
                </Text>
                <Text style={{color: '#000000', fontSize: 12, opacity: 0.4}}>
                  berakhir 31 Juli 2024
                </Text>
              </View>
            </Pressable>
          )}
        />
      </View>
      {isDrawer && (
        <CustomButtonSheet
          sheetRef={bottomSheetRef}
          handleSheetChanges={handleSheetChanges}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingHorizontal: 24,
              paddingVertical: 8,
            }}>
            <Text style={{color: 'black', fontSize: 20, fontWeight: '600'}}>
              Detail Pengumuman
            </Text>
            <View style={{marginTop: 16}}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                Pengumuman Libur Nasional
              </Text>
              <Text style={{color: 'black', marginVertical: 8}}>
                Dalam rangka memperingati hari libur nasional, kantor akan tutup
                pada tanggal 17 Agustus. Hari libur ini diperingati sebagai Hari
                Kemerdekaan Indonesia dan merupakan hari yang sangat penting
                bagi bangsa kita. Semua karyawan diharapkan untuk mengibarkan
                bendera merah putih di rumah masing-masing dan mengikuti upacara
                peringatan secara virtual atau di lokasi yang telah ditentukan
                oleh pemerintah setempat. Selain itu, kami juga menganjurkan
                para karyawan untuk menggunakan hari libur ini sebagai waktu
                untuk beristirahat dan menghabiskan waktu bersama keluarga.
                Liburan ini adalah kesempatan yang baik untuk merayakan
                pencapaian negara kita dan juga untuk merenungkan sejarah
                perjuangan kemerdekaan. Kantor akan kembali beroperasi normal
                pada hari berikutnya. Harap memastikan semua pekerjaan penting
                diselesaikan sebelum tanggal 17 Agustus. Terima kasih atas
                perhatian dan kerja sama Anda. Selamat merayakan Hari
                Kemerdekaan!
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{color: '#000000', fontSize: 12, opacity: 0.4}}>
                  21 hari lalu
                </Text>
                <Text style={{color: '#000000', fontSize: 12, opacity: 0.4}}>
                  berakhir 31 Juli 2024
                </Text>
              </View>
            </View>
            <View style={{marginTop: 24}}>
              <Pressable
                style={{
                  backgroundColor: APP.COLORS['primary-500'],
                  flex: 1,
                  padding: 12,
                  borderRadius: 8,
                }}
                onPress={() => setIsDrawer(false)}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#FFFFFF',
                    fontWeight: '700',
                  }}>
                  Mengerti
                </Text>
              </Pressable>
            </View>
          </View>
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
});

export default PengumumanScreen;
