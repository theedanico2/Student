import {Button, View, StyleSheet} from 'react-native'



const Second = ({navigation})=>{
  return (
    <View style={styles.container}>
      <Button 
        title="Назад" 
        onPress={() => {
          navigation.navigate(
            'First'
          )
        }}
      />      
      <Button 
        title="Вперед" 
        onPress={() => {
          navigation.navigate(
            'Third'
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
export default Second;