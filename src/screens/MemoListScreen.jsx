import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Alert, Text,
} from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';
import SubmitButton from '../components/SubmitButton';
import LogOutButton from '../components/LogOutButton';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);
  // ローデイングが発生するのは、ユーザーがネットワークにアクセスするタイミング。DB通信やボタン押下のとき。
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    // AppBarのnavigationを使っている時、コンポーネントを追加する方法
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      setLoading(true); // DBにアクセスするときに、isLoadingをtrueにする。
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(), // firebaseのtimestamp型で保存されているので、jsのdate型に変更している
          });
        });
        setMemos(userMemos);
        setLoading(false); // メモを取得した後、isLodingをfalseにする
      }, (error) => {
        setLoading(false); // 取得に失敗しても、isLodingをfalseにする
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      });
    }
    return unsubscribe;
  }, []);

  if (memos.length === 0) {
    return ( // memosにデータが入っていない状態
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.innner}>
          <Text style={emptyStyles.title}>最初のメモを作成してみよう！</Text>
          <SubmitButton
            style={emptyStyles.button}
            buttonText="作成する"
            onPress={() => { navigation.navigate('MemoCreate'); }}
          />
        </View>
      </View>
    );
  }
  return ( // memosにデータが入っている状態
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
