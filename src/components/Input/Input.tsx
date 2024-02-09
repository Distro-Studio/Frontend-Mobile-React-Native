import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = (props: any) => {
  const {name, placeholder, type, ...rest} = props;
  return (
    <View style={styles.form_group}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        secureTextEntry={type === 'password' ? true : false}
        placeholderTextColor="#C5C5C5"
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form_group: {
    gap: 8,
  },
  label: {
    color: '#222831',
    fontWeight: 'bold',
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
