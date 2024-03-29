// src/components/TextInput.js

import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';



const TextInput = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  return (
    <RNTextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderRadius:10,
    backgroundColor:'rgba(196, 196, 196, 0.2)',
    paddingHorizontal: 10,
    marginBottom: 10,
    padding:10,
  },
});

export default TextInput;
