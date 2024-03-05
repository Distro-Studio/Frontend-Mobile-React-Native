import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {IconActivityIn, IconActivityOut} from '../../assets/images';

const HomeActivity = () => {
  const data = [
    {
      id: 1,
      type: 'in',
      date: '01 November 2023',
      time: '07.30',
    },
    {
      id: 2,
      type: 'out',
      date: '01 November 2023',
      time: '16.30',
    },
  ];
  return (
    <View style={styles.activity_container}>
      <Text style={styles.activity_text_title}>Your Activity</Text>
      {data.map(item => (
        <View key={item.id} style={styles.activity_card}>
          <View style={styles.activity_status}>
            <Image
              source={item.type === 'in' ? IconActivityIn : IconActivityOut}
            />
            <View>
              <Text style={{color: '#222831', fontSize: 16, fontWeight: '600'}}>
                {item.type === 'in' ? 'Masuk' : 'Keluar'}
              </Text>
              <Text style={{color: '#BABCBF', fontSize: 14, fontWeight: '400'}}>
                {item.date}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#222831'}}>
            {item.time}
          </Text>
        </View>
      ))}
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

export default HomeActivity;
