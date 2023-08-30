import React, { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, onLogin] = useState(false);

  return (
    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {loggedIn && (
        <Text style={styles.headerText}>You are logged in!</Text>
      )}
      {!loggedIn && (
        <>
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
          clearButtonMode={'always'}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>
            Log in
          </Text>
        </Pressable>
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
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
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 120,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    width: 150,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
});