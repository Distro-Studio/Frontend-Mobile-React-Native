import {View, Text} from 'react-native';
import React from 'react';

const SlipGajiCard = () => {
  return (
    <View style={{marginTop: 32}}>
      <View style={{padding: 16, backgroundColor: '#FFFFFF', borderRadius: 12}}>
        <View
          style={{
            paddingBottom: 8,
            borderBottomColor: '#EBEBED',
            borderBottomWidth: 1,
          }}>
          <Text
            style={{
              fontWeight: '700',
              fontSize: 16,
              color: '#10A9A5',
            }}>
            Penghasilan
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
          }}>
          <Text style={{color: 'black'}}>Gaji Pokok</Text>
          <Text style={{color: 'black'}}>Rp5.000.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
          }}>
          <Text style={{color: 'black'}}>Tunjangan</Text>
          <Text style={{color: 'black'}}>Rp5.000.000</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 8,
            paddingBottom: 8,
            borderBottomColor: '#EBEBED',
            borderBottomWidth: 1,
          }}>
          <Text style={{color: 'black'}}>Tunjangan Jabatan</Text>
          <Text style={{color: 'black'}}>Rp5.000.000</Text>
        </View>
        <View>
          <Text style={{fontSize: 16}}>Total Penghasilan</Text>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              color: '#10A9A5',
              textAlign: 'center',
            }}>
            Rp7.200.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SlipGajiCard;
