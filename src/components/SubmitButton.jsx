import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { string, func } from 'prop-types';

export default function SubmitButton(props) {
  const { buttonText, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
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
  onPress: func,
};
SubmitButton.defaultProps = {
  onPress: null,
};
