import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkLoginCredentials } from './database';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleNextPage = () => {
    navigation.navigate("LoginScreen");
};

const handleLogin = () => {
    checkLoginCredentials(
      email,
      password,
      () => {
        navigation.navigate('MainScreen');
      },
      () => {
        Alert.alert('Ошибка', 'Введенные данные неверны или пользователь не зарегистрирован.');
      }
    );
  };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

  return (
<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', backgroundColor: "white" }}>
      <View style={{width:"100%", height: "100%"}}>
      <Image source={require('../assets/Round.png')} style={{height: 180, width: '100%', marginRight: 0,
    marginTop: 0, marginBottom: 80, resizeMode: 'stretch'}} />
        <Text style={styles.title}>Вход</Text>
        <Text style={styles.subtitle}>Введите логин и пароль</Text>

        <Text style={styles.inputTitle}>E-mail</Text>
<TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

        <Text style={styles.inputTitle}>Пароль</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

        <AppButton title="Войти" backgroundColor="#FF8787" onPress={handleLogin} />

        <Text style={{color: 'gray', fontSize: 20, textAlign: 'center', fontWeight: 'semi-bold'}}
        onPress={() => navigation.navigate('RegisterScreen')}>Зарегистрироваться
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize:44,
    textAlign:'left',
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginHorizontal: 19,
    marginBottom: 8
  },

  subtitle: {
    fontSize: 16,
    textAlign:'left',
    color:'gray',
    marginHorizontal: 20,
    paddingBottom: 48
  },

  inputTitle: {
    textAlign:'left',
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 20
  },

  input: {
    height: 40,
    marginHorizontal: 20,
    padding: 10,
    borderBottomWidth: 1
  },

  appButtonContainer: {
    backgroundColor: "#FF8787",
    height: 55,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: '25%',
    marginTop: 88,
    marginBottom: 48,
    justifyContent: 'center',
    elevation: 20,
    shadowColor: "red"
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  }
});

export default LoginScreen;