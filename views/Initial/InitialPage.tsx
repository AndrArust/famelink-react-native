import React, { Component } from 'react';
import { Text, View } from 'react-native'
import Gradient from '../../components/Gradient';
import Container from '../../components/Container'
import Col from '../../components/Col';
import styles from './styles'
import Button from '../../components/Button';

const InitialPage = () => {
  return (
    <Gradient>
      <Container>
        <Col style={styles.initialPage}>
          <View>
            <Text style={[styles.initialText, styles.header]}>Connect with FAMOUS PEOPLE</Text>
            <Text style={[styles.initialText, styles.desc]}>Connect with your fave FAMOUS PEOPLE in new ways and share new experiences with friends.</Text>
          </View>
          <View>
            <Button style={styles.signUpButton} text='Sign up' textStyle={[styles.initialText, styles.buttonText]} />
            <Button style={styles.logInButton} text='Log in' textStyle={[styles.initialText, styles.buttonText]} />
          </View>
        </Col>
      </Container>
    </Gradient>
  )
};

export default InitialPage;
