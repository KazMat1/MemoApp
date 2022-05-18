import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, Alert,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Loading from '../components/Loading';
import KeyboardSafeView from '../components/KeyboardSafeView';
import { translateErrors } from '../utils';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const [isLoading, setLoading] = useState(false);

  function handlePress() {
    setLoading(true); // ユーザー情報を取得する前に、ローディング処理を走らせる
    // 現在ログインしているユーザーの取得
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // ユーザーごとにreferenceを作って、collectionを参照する
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => { // success
        navigation.goBack();
      })
      .catch((error) => { // failed
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      .then(() => {
        setLoading(false); // エラーハンドリングの後に、loadingをfalseにする
      });
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBodyText(text); }}
          autoFocus
        />
      </View>
      <CircleButton
        name="check"
        // eslint-disable-next-line react/jsx-no-bind
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 27,
    paddingVertical: 32,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
  },
});
