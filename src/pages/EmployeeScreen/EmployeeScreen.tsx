import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';
import {IconNotificationBlack} from '../../assets/images';

const EmployeeScreen = ({navigation}) => {
  const headerIcon = () => {
    return (
      <Pressable>
        <Image source={IconNotificationBlack} style={{width: 24, height: 24}} />
      </Pressable>
    );
  };
  return (
    <ScrollView>
      <CustomHeaderApp backButton={false} rightIcon={headerIcon()}>
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
        <Pressable onPress={() => navigation.navigate('DetailEmployeeScreen')}>
          <Text>asd</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  header_dropdown_menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default EmployeeScreen;
