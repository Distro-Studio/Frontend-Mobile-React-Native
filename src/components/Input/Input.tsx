import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {IconEye} from '../../assets/images';
import {APP} from '../../utils/CONSTANT';

const Input = (props: any) => {
  const {name, placeholder, type, ...rest} = props;
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  console.log(props);
  return (
    <View style={styles.form_group}>
      <Text style={styles.label}>{name}</Text>
      <View style={{position: 'relative'}}>
        <TextInput
          {...rest}
          style={[
            {
              paddingHorizontal: 16,
              paddingVertical: 14,
              height: 48,
              borderRadius: 12,
              backgroundColor: '#F1F2F3',
              borderColor: '#ECECEC',
              borderWidth: 1,
              color: '#181818',
            },
            props.customStyle !== false && styles.isError,
          ]}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          secureTextEntry={
            type === 'password' && isShowPassword === false ? true : false
          }
          placeholderTextColor="#C5C5C5"
          autoCapitalize="none"
        />
        {type === 'password' && (
          <Pressable
            onPress={() => setIsShowPassword(!isShowPassword)}
            style={{
              position: 'absolute',
              right: 0,
              top: '40%',
              marginRight: 16,
            }}>
            <Image source={IconEye} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  isError: {
    borderColor: 'red',
  },
  form_group: {
    gap: 8,
  },
  label: {
    color: '#222831',
    fontWeight: '500',
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#F1F2F3',
    borderColor: '#ECECEC',
    borderWidth: 1,
  },
});

export default Input;
