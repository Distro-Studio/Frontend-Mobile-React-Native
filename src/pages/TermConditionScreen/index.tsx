import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {CustomHeaderApp} from '../../components';

const TermConditionScreen = () => {
  const dummies = [
    {
      id: 1,
      title: 'Penerimaan Syarat',
      content:
        'Dengan mengunduh, mengakses, dan menggunakan aplikasi ini, Anda setuju untuk mematuhi syarat dan ketentuan yang ditetapkan di bawah ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, harapjangan menggunakan aplikasi ini.',
    },
    {
      id: 2,
      title: 'Perubahan Syarat dan Ketentuan',
      content:
        'Kami berhak untuk mengubah atau memperbarui syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan aplikasi yang terus-menerus setelah perubahan berarti Anda menerima perubahan tersebut.',
    },
    {
      id: 3,
      title: 'Penggunaan Aplikasi',
      content:
        'Anda setuju untuk menggunakan aplikasi ini hanya untuk tujuan yang sah dan sesuai dengan semua undang-undang dan peraturan yang berlaku. Anda tidak boleh menggunakan aplikasi ini untuk melakukan tindakan yang melanggar hukum, menipu, atau merusak.',
    },
    {
      id: 4,
      title: 'Perubahan Syarat dan Ketentuan',
      content:
        'Kami berhak untuk mengubah atau memperbarui syarat dan ketentuan ini kapan saja tanpa pemberitahuan sebelumnya. Penggunaan aplikasi yang terus-menerus setelah perubahan berarti Anda menerima perubahan tersebut.',
    },
    {
      id: 5,
      title: 'Privasi',
      content:
        'Kami menghargai privasi Anda dan berkomitmen untuk melindungi informasi pribadi Anda. Harap tinjau Kebijakan Privasi kami untuk informasi lebih lanjut tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda.',
    },
    {
      id: 6,
      title: 'Konten Pengguna',
      content:
        'Anda dapat mengunggah, menyimpan, dan berbagi konten melalui aplikasi ini. Dengan melakukannya, Anda memberikan kami lisensi non-eksklusif, bebas royalti, untuk menggunakan, menampilkan, dan mendistribusikan konten tersebut sehubungan dengan pengoperasian aplikasi. Anda bertanggung jawab atas konten yang Anda unggah dan memastikan bahwa itu tidak melanggar hak pihak ketiga.',
    },
    {
      id: 7,
      title: 'Pembaruan dan Pemeliharaan',
      content:
        'Kami berhak untuk memperbarui, mengubah, atau menghentikan aplikasi ini atau bagian dari aplikasi ini kapan saja dengan atau tanpa pemberitahuan sebelumnya. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang mungkin timbul dari pembaruan, perubahan, atau penghentian tersebut.',
    },
    {
      id: 8,
      title: 'Pembatasan Tanggung Jawab',
      content:
        'Aplikasi ini disediakan "sebagaimana adanya" tanpa jaminan apapun. Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan aplikasi ini, termasuk kehilangan data atau keuntungan.',
    },
  ];
  return (
    <>
      <CustomHeaderApp backButton={true} screenName={'Syarat & Ketentuan'} />
      <ScrollView style={styles.container}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 16,
          }}>
          Syarat dan Ketentuan Penggunaan Aplikasi
        </Text>
        <FlatList
          data={dummies}
          scrollEnabled={false}
          contentContainerStyle={{gap: 16}}
          renderItem={({item}) => (
            <View>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>
                {item.id}. {item.title}
              </Text>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 16,
                  textAlign: 'justify',
                  lineHeight: 20,
                }}>
                {item.content}
              </Text>
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
    gap: 16,
    paddingBottom: 16,
    flex: 1,
  },
});

export default TermConditionScreen;
