import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet, Button, View
} from 'react-native';



const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.helloWorld}>Hello, world!</Text>

      <View>
        <Text>More</Text>
        <Text>Text</Text>
        <Text>Views</Text>
      </View>

      <Button title="Some button" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  helloWorld: {
    textAlign: 'center',
    fontSize: 20,
  }
})

export default App;
