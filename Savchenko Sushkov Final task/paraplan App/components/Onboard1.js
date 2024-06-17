import { View, Text, Button, StyleSheet, Image, AppButton, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageIndicator from './PageIndicator';

const Onboard1 = () => {
  const navigation = useNavigation();

  const handleNextPage = () => {
    navigation.navigate("Onboard2");
  };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://i.postimg.cc/xjJ5KkRQ/Welcome.png'}} style={styles.picture}>
                                </Image>
      <Text style={styles.title}>Добро пожаловать</Text>
      <Text style={styles.text}>ПараПлан - конфигуратор свадебных мероприятий, который поможет вам создать план вашей свадьбы</Text>
      <Text style={styles.text}>Для создания и последующего заполнения плана нужно сделать несколько простых действий</Text>
      <AppButton title="Далее" backgroundColor="#FF8787" onPress={handleNextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
    title: {
      fontFamily: 'Geometria',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 32,
      marginBottom: 20,
      marginHorizontal: 30,
      color: '#3A3A3A',
      textAlign: 'center'
  },
    text: {
      fontFamily: 'Geometria',
      fontSize: 18,
      fontWeight: 'regular',
      marginTop: 10,
      marginHorizontal: 30,
      color: '#3A3A3A',
      width: '84%'
},
    picture: {
      height: 390,
      width: '100%',
      resizeMode: 'contain',
      marginTop: 20,
      alignSelf: 'center'
},
    appButtonContainer: {
      backgroundColor: "#FF8787",
      height: 45,
      width: 200,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginHorizontal: '25%',
      marginVertical: 40,
      marginBottom: 60,
      justifyContent: 'center',
      elevation: 20,
      shadowColor: "red"
},
    appButtonText: {
      color: 'white',
      fontSize: 14,
      textAlign: 'center'
    }
});

export default Onboard1;