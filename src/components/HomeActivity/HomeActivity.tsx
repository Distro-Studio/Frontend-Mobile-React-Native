import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActivityCard from '../ActivityCard';

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
      {data.map((item, index) => (
        <View key={index}>
          <ActivityCard item={item} />
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
