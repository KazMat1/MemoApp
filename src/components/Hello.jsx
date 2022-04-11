import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { string, bool, shape } from 'prop-types';

function Hello(props) {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        {`Hello ${children}${bang ? '!' : ''}`}
      </Text>
    </View>
  );
}
// propsの型チェック
Hello.propTypes = {
  children: string.isRequired,
  bang: bool,
  style: shape(),
};
// propsのデフォルト値の指定
Hello.defaultProps = {
  bang: false,
  style: null,
};

/* eslint-disable */
const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
/* eslint-enable */
