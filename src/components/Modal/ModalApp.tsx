import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

const ModalApp = ({children, isModal}: any) => {
  return (
    <View style={[styles.centeredView, styles.modalViewContainer]}>
      <Modal animationType="fade" transparent visible={isModal}>
        <View style={[styles.centeredView, styles.fillBackround]} />
        <View style={styles.modalViewContainer}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fillBackround: {
    backgroundColor: 'black',
    flex: 1,
    opacity: 0.5,
  },
  modalViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default ModalApp;
