import { View, Text, Button, StyleSheet, Image, AppButton, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PageIndicator from './PageIndicator';

const Onboard5 = () => {
const navigation = useNavigation();
const handleStartButtonPress = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    navigation.navigate("LoginScreen");
    };
  

  const handleNextPage = () => {
    navigation.navigate("LoginScreen");
  };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
    <Image source={{uri: 'https://i.postimg.cc/QtPq2sjv/Plan.png'}} style={styles.picture}>
                                </Image>
      <Text style={styles.title}>Готовый план</Text>
      <Text style={styles.text}>После выбора исполнителей вы получите готовый план мероприятия 
с итоговой стоимостью свадьбы</Text>
      <PageIndicator totalPages={4} currentPage={3} />
      <AppButton title="Начать" backgroundColor="#FF8787" onPress={handleNextPage} />
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
      marginBottom: 60,
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
      marginVertical: 20,
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

export default Onboard5;