import { View, StyleSheet, Image } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Image
        style={headerStyles.logo}
        source={require('../img/littleLemonLogo.png')}
        resizeMode='contain'
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: 'contain',
    marginTop: 30,
    marginHorizontal: 40,
  },
});
