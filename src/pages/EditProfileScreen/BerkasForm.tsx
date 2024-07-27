import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {CircleArrowUp, CircleX, Eye, X} from 'lucide-react-native';
import {APP} from '../../utils/CONSTANT';
import DocumentPicker from 'react-native-document-picker';

const BerkasForm = () => {
  const [fileKTP, setFileKTP] = React.useState(null);
  const [fileKK, setFileKK] = React.useState(null);
  const [fileSIP, setFileSIP] = React.useState(null);
  const [fileBPJSKesehatan, setFileBPJSKesehatan] = React.useState(null);
  const [fileBPJSKetenagakerjaan, setFileBPJSKetenagakerjaan] =
    React.useState(null);
  const [fileIjazah, setFileIjazah] = React.useState(null);
  const [fileSertifikat, setFileSertifikat] = React.useState(null);

  const pickDocument = async type => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      switch (type) {
        case 'KTP':
          return setFileKTP(res);
        case 'KK':
          return setFileKK(res);
        case 'SIP':
          return setFileSIP(res);
        case 'BPJS Kesehatan':
          return setFileBPJSKesehatan(res);
        case 'BPJS Ketenagakerjaan':
          return setFileBPJSKetenagakerjaan(res);
        case 'Ijazah':
          return setFileIjazah(res);
        case 'Sertifikat':
          return setFileSertifikat(res);
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };
  return (
    <>
      <View>
        <View>
          <Text style={{color: '#222831', fontWeight: '500'}}>KTP</Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('KTP')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>
            Kartu Keluarga
          </Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('KK')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>SIP</Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('SIP')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>
            BPJS Kesehatan
          </Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('BPJS Kesehatan')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>
            BPJS Ketenagakerjaan
          </Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('BPJS Ketenagakerjaan')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>
            Ijazah Terakhir
          </Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('Ijazah')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: 12}}>
          <Text style={{color: '#222831', fontWeight: '500'}}>
            Sertifikat Kompetensi
          </Text>
          <View style={styles.input_wrapper}>
            <View style={{flex: 1}}>
              <View
                style={{flexDirection: 'row', gap: 4, alignItems: 'center'}}>
                <Pressable
                  style={styles.input_container}
                  onPress={() => pickDocument('Sertifikat')}>
                  <View>
                    <Text
                      style={{
                        color: '#222831',
                      }}>
                      Orewa John
                    </Text>
                  </View>
                </Pressable>
                <View style={styles.arrow_bg}>
                  <CircleArrowUp color={APP.COLORS['primary-500']} size={24} />
                </View>
              </View>
              <View style={{flexDirection: 'row', gap: 16, marginTop: 8}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <Eye color={APP.COLORS['primary-500']} size={16} />
                  <Text
                    style={{color: APP.COLORS['primary-500'], fontSize: 12}}>
                    Lihat
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                  <CircleX fill={'#E53E3E'} color={'#FFFFFF'} size={16} />
                  <Text style={{color: '#E53E3E', fontSize: 12}}>Hapus</Text>
                </View>
              </View>
            </View>
          </View>
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
  input_container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    height: 40,
    borderRadius: 8,
    borderColor: '#ECECEC',
    borderWidth: 1,
    color: '#181818',
    flex: 1,
  },
  input_wrapper: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
});

export default BerkasForm;
