import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
// import {IconActivityIn, IconActivityOut} from '../assets/images';
import InIcon from '../assets/icons/in-icon.svg';
import OutIcon from '../assets/icons/out-icon.svg';

const ActivityCard = ({item}) => {
  return (
    <View style={styles.activity_card}>
      <View style={styles.activity_status}>
        {item.type === 'in' ? (
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              backgroundColor: '#E7F6F6',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <InIcon />
          </View>
        ) : (
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              backgroundColor: '#FFEDEC',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <OutIcon />
          </View>
        )}
        {/* <Image source={item.type === 'in' ? IconActivityIn : IconActivityOut} /> */}
        <View>
          <Text style={{color: '#222831', fontSize: 14, fontWeight: '600'}}>
            {item.type === 'in' ? 'Masuk' : 'Keluar'}
          </Text>
          <Text style={{color: '#BABCBF', fontSize: 12, fontWeight: '400'}}>
            {item.date}
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 14, fontWeight: '600', color: '#222831'}}>
        {item.time}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default ActivityCard;
