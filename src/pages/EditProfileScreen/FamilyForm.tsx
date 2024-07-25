import {View, Text, FlatList, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {CircleArrowUp, Pencil, Plus, Trash} from 'lucide-react-native';
import {APP} from '../../utils/CONSTANT';
import CustomButtonSheet from '../../components/CustomBottomSheet/CustomButtonSheet';
import {getResponsive} from '../../utils';
import BottomSheet from '@gorhom/bottom-sheet';

const FamilyForm = ({setDetailData, setIsDrawer, setIsDelete, setIsAdd}) => {
  const dummies = [
    {
      id: 1,
      nama: 'Orewa John',
      hubungan_keluarga: 'Bapak',
      status_hidup: 'Hidup',
      pekerjaan: 'Dokter',
      nomor_telepon: '08521236547',
      email: 'orewajohn@gmail.com',
    },
    {
      id: 2,
      nama: 'Lestari',
      hubungan_keluarga: 'Ibu',
      status_hidup: 'Hidup',
      pekerjaan: 'PNS',
      nomor_telepon: '08521236547',
      email: 'lestari@gmail.com',
    },
  ];
  return (
    <>
      <FlatList
        data={dummies}
        scrollEnabled={false}
        contentContainerStyle={{gap: 16}}
        renderItem={({item}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
                {item.nama}
              </Text>
              <View
                style={{flexDirection: 'row', gap: 8, alignItems: 'center'}}>
                <Pressable
                  onPress={() => {
                    setIsDrawer(true);
                    setDetailData(item);
                    setIsDelete(false);
                    setIsAdd(false);
                  }}>
                  <Pencil color={APP.COLORS['primary-500']} size={16} />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setDetailData(item);
                    setIsDelete(true);
                    setIsDrawer(true);
                    setIsAdd(false);
                  }}>
                  <Trash color={'#C53232'} size={16} />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
              }}>
              <Text style={{color: 'black', opacity: 0.4}}>
                Hubungan Keluarga
              </Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  width: 'auto',
                  height: 2,
                  opacity: 0.1,
                }}
              />
              <Text style={{color: 'black'}}>{item.hubungan_keluarga}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
              }}>
              <Text style={{color: 'black', opacity: 0.4}}>Status Hidup</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  width: 'auto',
                  height: 2,
                  opacity: 0.1,
                }}
              />
              <Text style={{color: 'black'}}>{item.status_hidup}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
              }}>
              <Text style={{color: 'black', opacity: 0.4}}>Pekerjaan</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  width: 'auto',
                  height: 2,
                  opacity: 0.1,
                }}
              />
              <Text style={{color: 'black'}}>{item.pekerjaan}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
              }}>
              <Text style={{color: 'black', opacity: 0.4}}>Nomor Telepon</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  width: 'auto',
                  height: 2,
                  opacity: 0.1,
                }}
              />
              <Text style={{color: 'black'}}>{item.nomor_telepon}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
              }}>
              <Text style={{color: 'black', opacity: 0.4}}>Email</Text>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'black',
                  width: 'auto',
                  height: 2,
                  opacity: 0.1,
                }}
              />
              <Text style={{color: 'black'}}>{item.email}</Text>
            </View>
          </View>
        )}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 8,
          marginTop: 24,
        }}>
        <Pressable
          onPress={() => {
            setDetailData({});
            setIsAdd(true);
            setIsDrawer(true);
            setIsDelete(false);
          }}
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1,
            padding: 8,
            borderRadius: 8,
            borderColor: APP.COLORS['primary-500'],
            borderWidth: 2,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Plus color={APP.COLORS['primary-500']} size={16} />
          <Text
            style={{
              color: APP.COLORS['primary-500'],
              fontWeight: '700',
            }}>
            Tambah
          </Text>
        </Pressable>
        <View style={styles.arrow_bg}>
          <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  arrow_bg: {
    padding: 4,
    backgroundColor: '#EDF2F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default FamilyForm;
