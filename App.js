import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './components/WelcomeScreen';
// import FeedbackComponent from './components/FeedbackComponent';
import LoginScreen from './components/LoginScreen';
// import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <>
      <View style={styles.headerContainer}>
        <LittleLemonHeader />
        <LoginScreen />
        {/* <FeedbackComponent /> */}
        {/* <MenuItems /> */}
        {/* <WelcomeScreen /> */}
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
    backgroundColor: '#333333',
  },
  mainContainer: {
    flex: 0.5,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
