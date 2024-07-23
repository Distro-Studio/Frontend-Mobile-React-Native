import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {EllipsisVertical, Search} from 'lucide-react-native';
import Icon from 'react-native-remix-icon';
const DokumenScreen = () => {
  const [isSearch, setIsSearch] = React.useState(false);
  const dummyFiles = [
    {
      id: 1,
      name: 'File_word.docx',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-word-fill" size="72" color="#4299e1" />,
    },
    {
      id: 2,
      name: 'File_pdf.pdf',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-pdf-fill" size="72" color="#F56565" />,
    },
    {
      id: 3,
      name: 'File_excel.xlsx',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-excel-fill" size="72" color="#48BB78" />,
    },
    {
      id: 4,
      name: 'File_csv.csv',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-excel-fill" size="72" color="#48BB78" />,
    },
    {
      id: 5,
      name: 'File_img.jpg',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="image-fill" size="72" color="#9F7AEA" />,
    },
    {
      id: 6,
      name: 'File_svg.svg',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="image-fill" size="72" color="#9F7AEA" />,
    },
    {
      id: 7,
      name: 'File_word.docx',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-word-fill" size="72" color="#4299e1" />,
    },
    {
      id: 8,
      name: 'File_pdf.pdf',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-pdf-fill" size="72" color="#F56565" />,
    },
    {
      id: 9,
      name: 'File_excel.xlsx',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-excel-fill" size="72" color="#48BB78" />,
    },
    {
      id: 10,
      name: 'File_csv.csv',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="file-excel-fill" size="72" color="#48BB78" />,
    },
    {
      id: 11,
      name: 'File_img.jpg',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="image-fill" size="72" color="#9F7AEA" />,
    },
    {
      id: 12,
      name: 'File_svg.svg',
      size: '13 KB',
      date: '12/7/2024',
      icon: <Icon name="image-fill" size="72" color="#9F7AEA" />,
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
        backButton={true}
        rightIcon={headerIcon()}
        isSearch={isSearch}
        searchForm={SearchForm()}
        setIsSearch={setIsSearch}
        screenName={'Dokumen'}
      />
      <ScrollView style={styles.container}>
        <FlatList
          data={dummyFiles}
          scrollEnabled={false}
          numColumns={2}
          contentContainerStyle={{gap: 8}}
          renderItem={({item}) => (
            <View
              style={{
                backgroundColor: '#FFFFFF',
                flex: 1,
                borderRadius: 12,
                padding: 12,
                marginHorizontal: 2,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{color: 'black', fontSize: 12}}>{item.name}</Text>
                <EllipsisVertical color={'black'} size={16} />
              </View>
              <View
                style={{
                  height: 100,
                  flex: 1,
                  marginVertical: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {item.icon}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text style={{color: 'black', fontSize: 12, opacity: 0.4}}>
                  {item.size}
                </Text>
                <Text style={{color: 'black', fontSize: 12, opacity: 0.4}}>
                  {item.date}
                </Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
});
export default DokumenScreen;
