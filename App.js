import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet } from 'react-native';

// import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
// import FeedbackComponent from './components/FeedbackComponent';
import LoginScreen from './src/components/LoginScreen';
import MenuItems from './src/components/MenuItems';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
    <NavigationContainer>
      <View style={styles.container}>
        {/* <LittleLemonHeader /> */}
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerStyle: { backgroundColor: '#333333' },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Login' }}
          />
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name='Menu'
            component={MenuItems}
          />
        </Stack.Navigator>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
