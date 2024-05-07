import React, {useState, useRef} from "react";
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
    Pressable, Alert
} from "react-native";
import Item from './components/Item'
const DATA = [
      {
        id: '1',
        title: 'First Item',
        image_url: 'https://minio.nplus1.ru/app-images/160245/e80da31e04852135a4db44be84f2d70e.jpg'
      },
      {
        id: '2',
        title: 'Second Item',
        image_url: 'https://unisky.aero/upload/iblock/3a2/3a24f81138067584751b28efa2ab6d9c.png'
      },
      {
        id: '3',
        title: 'Third Item',
        image_url: 'https://static.tildacdn.com/tild6561-3363-4231-a662-326531626566/WKD_30917-DeNoiseAI-.jpg'
      },
    ];

const App = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const [currentIndex, setCurrentIndex] = useState(0)
    const slideRef = useRef(null)
    const {width: windowWidth} = useWindowDimensions();
    const viewItemsChanged = useRef(({viewableItems})=>{
      setCurrentIndex(viewableItems[0].index)
    }).current
    const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current
    const onPress = () => {
        Alert.alert('Покупаем самолет')
    }

    return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>Get the best prices</Text>
          <View style={{flex:3}}>
            <FlatList
            horizontal
            ItemSeparatorComponent={() => {
                    return (
                        <View
                            style={{
                                height: "100%",
                                width: 40,
                            }} />
                    );
                }}            
            data={DATA}
            renderItem={({item}) => <Item 
              title={item.title} 
              image_url={item.image_url}
            />}
            bounces={false}
            showsHorizontalScrollIndicator
            keyExtractor={item => item.id}
            paddingHorizontal={true}
            onScroll={Animated.event([
                {
                    nativeEvent: {
                        contentOffset: {
                            x: scrollX
                        }
                    }
                }
            ],
            {
              useNativeDriver: false
            }
            )}  
            scrollEventThrottle={32}
            onViewableItemsChanged={viewItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slideRef}
            />
          </View>
          <View style={styles.indicatorContainer}>
            {DATA.map((image, imageIndex) => {
                const width = scrollX.interpolate({
                    inputRange: [
                        windowWidth * (imageIndex - 1),
                        windowWidth * imageIndex,
                        windowWidth * (imageIndex + 1)
                    ],
                    outputRange: [8, 16, 8],
                    extrapolate: "clamp"
                });
                return (
                    <Animated.View
                        key={imageIndex}
                        style={[styles.separatorDot, {width}]}
                    />
                );
            })}
          </View>
          <View style={styles.button_container}>
            <Button 
            title='Got, it thanks' 
            onPress={onPress}
            />
          </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center"
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20
    },
    separatorDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: "silver",
        marginHorizontal: 4
    },
    indicatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    button_container:{
        width:"100%",
        color: 'black'
    },
});
export default App;