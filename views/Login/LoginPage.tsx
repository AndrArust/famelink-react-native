import React from 'react';
import { Text, View } from 'react-native'
import Container from '../../components/Container'
import Col from '../../components/Col';
import styles from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import KeyboardShift from '../../components/KeyboardShift';
import Gradient from '../../components/Gradient';

const LoginPage = () => {
  return (
    <Gradient>
      <Container>
        <KeyboardShift>
          <Col style={[styles.loginPage, styles.column]}>
            <View style={styles.w100}>
              <Input placeholder='Email' type='emailAddress' placeholderColor='#bfb8b8' style={styles.loginText}></Input>
              <Input placeholder='Username' type='username' placeholderColor='#bfb8b8' style={styles.loginText}></Input>
              <Input placeholder='Password' type='password' placeholderColor='#bfb8b8' style={styles.loginText}></Input>
              <Button style={[styles.button, styles.w100]} text='Create an account' textStyle={[styles.buttonText, styles.loginText]} />
            </View>
            <View style={styles.w100}>
              <Text style={[styles.text_cent, styles.helpText]}>Already have an account? Sign in</Text>
              <Input placeholder='Email address or username' type={'username' || 'emailAdress'} placeholderColor='#bfb8b8' style={styles.loginText}></Input>
              <Input placeholder='Password' type='password' placeholderColor='#bfb8b8' style={styles.loginText}></Input>
              <Button style={[styles.button, styles.w100]} text='Sign in' textStyle={[styles.buttonText, styles.loginText]} />
            </View>
          </Col>
        </KeyboardShift>
      </Container>
    </Gradient>
  );
};

export default LoginPage;
