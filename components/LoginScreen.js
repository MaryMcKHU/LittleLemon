import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>
      <TextInput
        value={email}
        onChangeText={onChangeEmail}
        style={styles.input}
        placeholder={'Email'}
        keyboardType={'email-address'}
        clearButtonMode={'always'}
      />
      <TextInput
        value={password}
        onChangeText={onChangePassword}
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: 'white',
  },
});