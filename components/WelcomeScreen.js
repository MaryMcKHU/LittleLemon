import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function WelcomeScreen() {
  const [firstName, onChangeFirstName] = useState('');
  return (
    <View style={welcomeStyles.container}>
      <Text style={welcomeStyles.headerText}>
        Welcome to Little Lemon
      </Text>
      <Text style={welcomeStyles.mainText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <TextInput
        style={welcomeStyles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={'First Name'}
      />
    </View>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  mainText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
  }
})
