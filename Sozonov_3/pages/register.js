import {StyleSheet, Text, View, TextInput, Image, Button, Alert, Pressable} from 'react-native';
import {useState} from "react";

const CustomButton = ({ title, onPress }) => (
  <View style={styles.buttonContainer}>
    <Button title={title} onPress={onPress} />
  </View>
);

function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        Alert.alert('Регистрация пройдена');
      } else {
        Alert.alert('Пароли не совпадают');
      }
    } else {
      Alert.alert('Пожалуйста, заполните все поля');
    }
  };

    return (
        <View style={styles.container}>
            <Image style={styles.image}
                   source={{
                       uri: 'https://pic.rutubelist.ru/video/10/ca/10ca6c0dec67dd3f8dbf4b1748899a42.png',
                   }}
            />

           <View style={styles.form}>
        <Text style={styles.title}>Регистрация</Text>
        <Text style={styles.subtitle}>Введите логин и пароль для регистрации</Text>

        <TextInput
          style={styles.input}
          placeholder="Почта"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Повторный пароль"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <CustomButton title="Зарегистрироваться" onPress={handleRegister} />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
  image: {
    width: 200,
    height: 200,
    marginEnd: 'auto',
    marginStart: 'auto',
  }
});

export default RegisterScreen;