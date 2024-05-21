import {Button, View, StyleSheet} from 'react-native'




const Third = ({navigation})=>{
  return (
    <View style={styles.container}>
      <Button 
        title="Назад" 
        onPress={
          () => {
            navigation.navigate('Second')
          }
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default Third;