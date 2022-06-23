import React from 'react';

import styles from './styles';
import { TextInput } from 'react-native';

const Input = (props: any) => {
  return (
    <TextInput
      placeholderTextColor={props.placeholderColor}
      secureTextEntry={props.type == 'password' ? true : false}
      textContentType={props.type}
      placeholder={props.placeholder}
      style={[props.style, styles.input]}
    >
      {props.children}
    </TextInput>
  );
}

export default Input;
