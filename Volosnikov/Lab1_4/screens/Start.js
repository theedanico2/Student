import {Button, View, StyleSheet} from 'react-native'



const Start = ({navigation})=>{
  return (
    <View style={styles.container}>
      <Button 
        title="Перети на второй экран" 
        onPress={() => {
          navigation.navigate(
            'Second'
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})
export default Start;