import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Button = (props: any) => {
  return (
    <View onResponderRelease={props.submit} style={[styles.button, props.style]}>
      <Text style={props.textStyle}>{props.text}</Text>
    </View>
  );
}

export default Button;
