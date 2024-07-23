import {
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {ChevronRight, Search} from 'lucide-react-native';
import {getResponsive} from '../../utils';

const Feedback = ({navigation}) => {
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
        screenName={'Feedback'}
      />
      <View style={styles.container}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <Pressable
              onPress={() => navigation.navigate('DetailFeedbackScreen')}
              style={{
                backgroundColor: '#FFFFFF',
                padding: 16,
                borderRadius: 12,
                flexDirection: 'row',
                gap: 8,
              }}>
              <View
                style={{
                  width: getResponsive(40, 'width'),
                  height: getResponsive(40, 'height'),
                  borderRadius: 50,
                  backgroundColor: 'red',
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <Text style={{color: 'black', fontSize: 14}}>
                    User {item}
                  </Text>
                  <Text style={{color: 'black', fontSize: 12, opacity: 0.4}}>
                    User {item} Role
                  </Text>
                </View>
                <ChevronRight color={'black'} />
              </View>
            </Pressable>
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

export default Feedback;
