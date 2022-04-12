import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // HTML
    <View style={styles.container}>
      {/* App bar */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>MemoApp</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>
      {/* Memo list */}
      <View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        {/* Memo list item */}
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2022年4月12日 10:00</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
      </View>
      {/* Create button */}
      <View style={styles.circleButton}>
        <Text style={styles.plusButton}>+</Text>
      </View>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 9,
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  plusButton: {
    fontSize: 40,
    lineHeight: 40,
    color: '#fff',
  },
});
