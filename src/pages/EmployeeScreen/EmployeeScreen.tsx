import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IconSearch} from '../../assets/images';
import {CustomHeaderApp, EmployeeCard} from '../../components';

const EmployeeScreen = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconSearch} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  return (
    <ScrollView>
      <CustomHeaderApp
        backButton={false}
        rightIcon={headerIcon()}
        screenName={'Employee'}>
        <View style={styles.header_dropdown_menu}>
          <View>
            <Text>Menu Dropdown 1</Text>
          </View>
          <View>
            <Text>Menu Dropdown 2</Text>
          </View>
        </View>
      </CustomHeaderApp>
      <View style={styles.container}>
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map(item => (
          <EmployeeCard key={item} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    gap: 16,
  },
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default EmployeeScreen;
