import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {Search} from 'lucide-react-native';
import {date} from 'yup';

const InboxScreen = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  const dummyData = [
    {
      id: 1,
      title: 'Permintaan Tukar Jadwal',
      content: 'Jolitos Kurniawan ingin tukar jadwal dengan Anda',
      date: '12 hari lalu',
    },
    {
      id: 2,
      title: 'Lembur',
      content: 'Kepala ruang mejadwalkan lembur untuk Anda',
      date: '13 hari lalu',
    },
    {
      id: 3,
      title: 'Event & Diklat',
      content: 'Kepala ruang mejadwalkan lembur untuk Anda',
      date: '12 hari lalu',
    },
    {
      id: 4,
      title: 'Pengumuman',
      content: 'Ada pengumuman baru, segera dicek ya',
      date: '19 hari lalu',
    },
    {
      id: 5,
      title: 'Pengajuan Tukar Jadwal',
      content: 'Tukar jadwal anda sudah disetujui manajer',
      date: '20 hari lalu',
    },
    {
      id: 6,
      title: 'Permintaan Tukar Jadwal',
      content: 'Tukar jadwal anda sudah disetujui manajer',
      date: '22 hari lalu',
    },
  ];
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
        backButton={isSearch ? true : false}
        rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Inbox'}
      />
      <View style={styles.container}>
        <FlatList
          data={dummyData}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                padding: 16,
                borderRadius: 12,
                gap: 4,
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                {item.title}
              </Text>
              <Text style={{color: 'black', fontWeight: '400', fontSize: 14}}>
                {item.content}
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '400',
                  fontSize: 12,
                  opacity: 0.4,
                }}>
                {item.date}
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingBottom: 16,
    flex: 1,
  },
});

export default InboxScreen;
