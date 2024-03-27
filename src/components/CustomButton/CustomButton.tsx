import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const CustomButton = (props: any) => {
  return (
    <Pressable style={styles.buttonBase(props)}>
      <Text
        style={{
          color: props.color ? props.color : '#FFFFFF',
          textAlign: 'center',
        }}>
        {props.text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBase: (state: any) => ({
    backgroundColor: state.bgColor ? state.bgColor : '#10A9A5',
    borderRadius: state.borad ? state.borad : 8,
    padding: state.padding ? state.padding : 10,
    marginTop: state.mt ? state.mt : 16,
  }),
});

export default CustomButton;
