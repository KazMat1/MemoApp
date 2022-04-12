import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.plusButton}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
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
