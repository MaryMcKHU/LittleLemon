import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function FeedbackForm() {
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const [phoneNumber, onChangePhoneNumber] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView keyboardDismissMode='on-drag'>
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food and
          classic cocktails in a lively but casual environment. We would love to hear
          your experiences with us!
        </Text>
        <TextInput
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder={'First Name'}
          style={styles.input}
        />
        <TextInput
          value={lastName}
          onChangeText={onChangeLastName}
          placeholder={'Last Name'}
          style={styles.input}
        />
        <TextInput
          value={phoneNumber}
          onChangeText={onChangePhoneNumber}
          placeholder={'Phone Number'}
          style={styles.input}
          keyboardType={'phone-pad'}
        />
        <TextInput
          value={message}
          onChangeText={onChangeMessage}
          placeholder={'Please leave feedback'}
          style={styles.messageInput}
          multiline={true}
          maxLength={250}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#F4CE14',
  },
  messageInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F4CE14',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});
