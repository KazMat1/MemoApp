import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import CircleButton from '../components/CircleButton';

export default function MemoListScreen() {
  return (
    // HTML
    <View style={styles.container}>
      <AppBar />
      {/* Memo list */}
      <MemoList />
      <MemoList />
      <MemoList />
      {/* Circle button */}
      <CircleButton>+</CircleButton>
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
