import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.small}>
        5 книжных новинок для любителей художественной литературы
      </Text>
      <Text style={styles.medium}>
        Сарит Ишай-Леви «Королева красоты Иерусалима»
      </Text>
      <View style={styles.big}>
        <Text style={styles.big_text}>
              Захватывающая дух сага о четырех поколениях сефардской семьи, жизнеутверждающая и трогательная новелла о дружбе двух умирающих женщин, роман о природе любви в двадцать первом веке, история трансформации любви в браке, новая книга от от лауреата Пулитцеровской премии Эндрю Шона Грира и атмосферный детектив о сорванных мечтах и побеге от привычного. В нашей подборке увлекательные новинки художественной литературы, которые скрасят ваши выходные.        
        </Text>
        <View style={styles.bottom}>
          <Button  title='Читать далее' color='black'/>
        </View>
      </View>

    </View>    
  );
}


const styles = StyleSheet.create({
    container:{
        paddingTop: 40,
        flex: 1,
    },
    small: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      margin:10
    },
    medium:{
      flex:1,
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      backgroundColor: '#D3D3D3',
      padding: 10,
      fontSize: 16
    },
    big:{
      flex:3,
      backgroundColor: '#A9A9A9',
    },
    big_text:{
      textAlign: "center",
      margin:10
    },
    bottom:{
      alignItems:'flex-end',
    }
});