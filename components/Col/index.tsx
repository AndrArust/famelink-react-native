import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const Col = (props: any) => {
  return (
    <View style={[styles.column, props.style]}>
      {props.children}
    </View>
  );
}

export default Col;
