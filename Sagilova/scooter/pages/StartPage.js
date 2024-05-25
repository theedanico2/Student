import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function StartPage({ navigation }) {
  return (
    <View style={styles.main_container}>
      <Image source={require('../assets/logo.png')} />
      <Text style={styles.title}>Your scooter in one app</Text>
      <Image source={require('../assets/illustration.png')} />
      <Text style={styles.description}>
        Everything you need to know about your scooter is available here  your
        app
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={navigation.navigate('MainPage')}>
        <Image source={require('../assets/get_started.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#55418E',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 32,
    gap: 32,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
  },
  description: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  button: {
    paddingLeft: "90%"
  },
});
