import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import SubmitButton from '../components/SubmitButton';
import { translateErrors } from '../utils';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
  }
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          // 行頭の大文字を防いでくれる
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="メールアドレス"
          // iOSで保存してくれる
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="パスワード"
          // パスワードの時はつけておく
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton
          buttonText="Register"
          // eslint-disable-next-line react/jsx-no-bind
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    marginBottom: 24,
  },
  input: {
    color: '#000',
    fontSize: 16,
    height: 48,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    color: '#467FD3',
    fontSize: 14,
    lineHeight: 24,
  },
});
