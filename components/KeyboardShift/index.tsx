import React from 'react';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const KeyboardShift = (props: any) => {
  return (
    Platform.OS === 'ios' ?
      <KeyboardAvoidingView
        behavior='padding'
        enabled
      >
        <SafeAreaProvider style={{justifyContent:"center"}}>
          {props.children}
        </SafeAreaProvider>
      </KeyboardAvoidingView>
      : <View>
        {props.children}
      </View>
  );
}

export default KeyboardShift;
