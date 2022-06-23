import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const Gradient = (props: any) => {
  return (
    <LinearGradient
      colors={['#bc0067', '#6c05ba']}
      style={[styles.linearGradient, props.style]}
    >
      {props.children}
    </LinearGradient>
  );
}

export default Gradient;
