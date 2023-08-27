import React from 'react';
import { ScrollView, Text, StyleSheet, Image, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView style={welcomeStyles.container}>
      <View style={welcomeStyles.headerWrapper}>
        <Image
          style={welcomeStyles.logo}
          source={require('../img/littleLemonAppLogo.png')}
          resizeMode={'cover'}
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={welcomeStyles.headerText}>Little Lemon</Text>
      </View>
      <Text style={welcomeStyles.title}>
        Little Lemon is a charming neighborhood bistro that serves simple
        food and classic cocktails in a lively but casual environment. We
        would love to hear your experience with us!
      </Text>
      {/* <Image
        style={welcomeStyles.image}
        source={require('../img/image1.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Random image'}
      />
      <Image
        style={welcomeStyles.image}
        source={require('../img/image2.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Random image'}
      />
      <Image
        style={welcomeStyles.image}
        source={require('../img/image3.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Random image'}
      />
      <Image
        style={welcomeStyles.image}
        source={require('../img/image4.png')}
        resizeMode='cover'
        accessible={true}
        accessibilityLabel={'Random image'}
      /> */}
    </ScrollView>
  );
}

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#EDEFEE',
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
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
  },
  title: {
    marginTop: 16,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  logo: {
    width: 75,
    height: 75,
  },
});
