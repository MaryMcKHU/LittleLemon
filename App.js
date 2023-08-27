import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import WelcomeScreen from './src/components/WelcomeScreen';
// import FeedbackComponent from './components/FeedbackComponent';
import LoginScreen from './src/components/LoginScreen';
// import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        {/* <LoginScreen /> */}
        {/* <FeedbackComponent /> */}
        {/* <MenuItems /> */}
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 0.5,
    backgroundColor: '#EDEFEE',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
