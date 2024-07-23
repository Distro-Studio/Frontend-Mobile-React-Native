import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../../components';
import {getResponsive} from '../../../utils';
import {APP} from '../../../utils/CONSTANT';

const DetailFeedback = () => {
  const questions = [
    {
      id: 1,
      title:
        'Apakah Anda setuju bahwa rendang adalah makanan terbaik di dunia?',
    },
    {
      id: 2,
      title: 'Apakah menurut Anda cuaca hujan sangat menyenangkan?',
    },
    {
      id: 3,
      title:
        'Apakah Anda setuju bahwa musim panas adalah waktu terbaik untuk liburan?',
    },
    {
      id: 4,
      title:
        'Bagaimana pendapat Anda tentang teknologi dalam kehidupan sehari-hari: tidak setuju, netral, atau setuju?',
    },
    {
      id: 5,
      title:
        'Apakah menurut Anda komedi lebih baik daripada drama dalam film atau pertunjukan TV?',
    },
    {
      id: 6,
      title:
        'Apakah Anda setuju bahwa musik dapat mempengaruhi suasana hati seseorang secara signifikan?',
    },
    {
      id: 7,
      title:
        'Bagaimana pandangan Anda tentang olahraga ekstrem: tidak setuju, netral, atau setuju?',
    },
    {
      id: 8,
      title:
        'Apakah menurut Anda perjalanan waktu mungkin terjadi di masa depan? Tidak setuju, netral, atau setuju?',
    },
    {
      id: 9,
      title:
        'Bagaimana pendapat Anda tentang kehidupan di luar Bumi: tidak setuju, netral, atau setuju?',
    },
    {
      id: 10,
      title:
        'Apakah menurut Anda menonton film di bioskop lebih baik daripada menonton di rumah? Tidak setuju, netral, atau setuju?',
    },
  ];
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Kuisioner'} />
      <ScrollView style={styles.container}>
        <View
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
              <Text style={{color: 'black', fontSize: 14}}>User</Text>
              <Text style={{color: 'black', fontSize: 12, opacity: 0.4}}>
                User Role
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#bee3f8',
            padding: 16,
            borderRadius: 12,
            marginTop: 16,
          }}>
          <Text style={{color: 'black', fontSize: 14}}>
            Silakan berikan penilaian Anda untuk setiap pertanyaan berikut ini:
          </Text>
        </View>
        <View style={{marginTop: 16}}>
          <FlatList
            data={questions}
            scrollEnabled={false}
            contentContainerStyle={{gap: 16}}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 12,
                  borderRadius: 12,
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'black'}}>{item.id}. </Text>
                  <Text style={{color: 'black'}}> {item.title}</Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 16,
                    flexDirection: 'row',
                    marginTop: 8,
                    justifyContent: 'space-between',
                  }}>
                  {[1, 2, 3, 4, 5].map(score => (
                    <View
                      key={score}
                      style={{
                        borderWidth: 2,
                        borderRadius: 50,
                        borderColor: 'black',
                        width: getResponsive(35, 'width'),
                        height: getResponsive(35, 'height'),
                        padding: 4,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'black', textAlign: 'center'}}>
                        {score}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          />
          <View style={{marginVertical: 16}}>
            <Pressable
              style={{
                backgroundColor: APP.COLORS['primary-500'],
                flex: 1,
                padding: 12,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#FFFFFF',
                  fontWeight: '700',
                }}>
                Kirim
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
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

export default DetailFeedback;
