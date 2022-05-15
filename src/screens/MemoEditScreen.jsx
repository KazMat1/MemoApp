import React, { useState } from 'react';
import {
  StyleSheet, TextInput, View, Alert,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  const [isLoading, setLoading] = useState(false);

  function handlePress() {
    setLoading(true); // ユーザー情報を取得する前に、ローディング処理を走らせる
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      // メモを監視するのではなく、更新していく
      ref.set({
        bodyText: body,
        updatedAt: new Date(),
      }, { merge: true })
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
        })
        .then(() => {
          setLoading(false);
        });
    }
  }

  return (
    <KeyboardSafeView style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { setBody(text); }}
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
MemoEditScreen.propTypes = {
  route: shape({
    params: shape({
      id: string,
      bodyText: string,
    }),
  }).isRequired,
};
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
