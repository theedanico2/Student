import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Image, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} onPress={onPress} />
  </View>
);

function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (login && password) {
      Alert.alert('Аутентификация пройдена');
    } else {
      Alert.alert('Пожалуйста, введите логин и пароль');
    }
  };

  return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{
                       uri: 'https://papik.pro/grafic/uploads/posts/2023-04/1682550049_papik-pro-p-smail-rabota-png-6.png',
                   }}
            />
      <View style={styles.form}>
        <Text style={styles.title}>Авторизация</Text>
        <Text style={styles.subtitle}>Введите логин и пароль</Text>

        <TextInput
          style={styles.input}
          placeholder="Логин"
          value={login}
          onChangeText={setLogin}
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton title="Войти" onPress={handleLogin} />
        <CustomButton title="Зарегистрироваться" onPress={() => navigation.navigate('Регистрация')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F08080',
  },
  form: {
    width: 250,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: -5,
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginEnd: 'auto',
    marginStart: 'auto',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default LoginScreen;