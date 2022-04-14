import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string } from 'prop-types';

export default function SubmitButton(props) {
  const { buttonText } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});
SubmitButton.propTypes = {
  buttonText: string.isRequired,
};
