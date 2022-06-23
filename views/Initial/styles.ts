import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  initialPage: {
    justifyContent: "space-around",
    height: 562
  },
  initialText: {
    color: '#ffffff',
    textAlign: "center",
  },
  header: {
    fontSize: 38,
    lineHeight: 44,
    fontWeight: 'bold',
    //fontFamily: "Gotham",
    marginBottom: 10
  },
  desc: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '500',
    //fontFamily: "Roboto"
  },
  signUpButton: {
    backgroundColor: '#bf0063',
    marginBottom: 10
  },
  logInButton: {
    backgroundColor: '#7804ad'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    // fontFamily: "Roboto"
  }
});

export default styles;
