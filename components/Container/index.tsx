import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';

const Container = (props: any) => {
  return (
    <ScrollView contentContainerStyle={[styles.container, props.style]}>
      {props.children}
    </ScrollView>
  );
}

export default Container;
