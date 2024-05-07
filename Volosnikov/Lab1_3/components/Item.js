import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    FlatList,
    Animated,
    useWindowDimensions,
    Text,
    Button,
    Pressable, Alert,
    Image
} from "react-native";


const Item = ({title,image_url})=>{
  const {width} = useWindowDimensions()
  return(
    <View style={styles.container}>
      <Image style={[styles.image, {width, resizeMode:'scroll'}]} source={{uri:image_url}}/>
      <Text style={styles.text}>
      {title}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent: "center",
    justifyContent: "center",
  },
  image:{
    flex:0.8,
  },
  text: {
    fontSize:50,
    textAlign: 'center'
  }
})
export default Item;