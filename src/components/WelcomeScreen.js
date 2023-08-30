import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  useColorScheme,
  Pressable,
  // useWindowDimensions
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  const colorScheme = useColorScheme();

  return (
    <ScrollView style={[
      welcomeStyles.container,
      colorScheme === 'light' ? { backgroundColor: 'white' } : { backgroundColor: 'black' },
    ]}>
      <View style={welcomeStyles.headerWrapper}>
        <Image
          style={welcomeStyles.image}
          source={require('../img/littleLemonAppLogo.png')}
          resizeMode={'cover'}
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />
        <Text style={[
          welcomeStyles.headerText,
          colorScheme === 'light'
              ? { color: '#333333' }
              : { color: '#EDEFEE' },
        ]}>Little Lemon</Text>
      </View>
      <Text style={[
        welcomeStyles.headerText,
        colorScheme === 'light' ? { color: '#333333' } : { color: '#EDEFEE' },
      ]}>
        Little Lemon is a charming neighborhood bistro that serves simple
        food and classic cocktails in a lively but casual environment. We
        would love to hear your experience with us!
      </Text>
      <Pressable onPress={() => navigation.navigate('Menu')}>
        <Text style={welcomeStyles.buttonText}>View Menu</Text>
      </Pressable>
      {/* <Text>Window Dimensions</Text>
      <Text>Height: {window.height}</Text>
      <Text>Width: {window.width}</Text>
      <Text>Font scale: {window.fontScale}</Text> */}
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
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  buttonText: {
    color: 'blue',
  },
});
