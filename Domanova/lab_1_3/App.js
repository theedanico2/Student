import React, {useRef} from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    useWindowDimensions,
    Text,
    Pressable, 
    Alert
} from "react-native";

const images = [
    'https://avatars.mds.yandex.net/get-verba/787013/2a000001675ec26d44c5fc838f55f253d508/cattouchret',
    'https://www.porsche-moscow.ru/photos/cars/custom/457029_Q4vUF1hnIw4xwAJSHx8n26HNo22L4UL0.webp.optimized.jpg'
]


const App = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const {width: windowWidth} = useWindowDimensions();

    const buy = () => {
        Alert.alert('Отлично, покупаем!!!!')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Get The Best Car!</Text>
            <View style={styles.scrollContainer}>
                <ScrollView
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: scrollX
                                }
                            }
                        }
                    ])}
                    scrollEventThrottle={1}
                >
                    {images.map((image, imageIndex) => {
                        return (
                            <Animated.View
                                style={{
                                    width: windowWidth,
                                    height: 250,
                                }}
                                key={imageIndex}
                            >
                                <ImageBackground source={{uri: image}} style={styles.card}>
                                </ImageBackground>
                                <Text style={styles.description}>Хотите купить авто?! Поможем!</Text>
                            </Animated.View>
                        );
                    })}
                </ScrollView>
                <View style={styles.indicatorContainer}>
                    {images.map((image, imageIndex) => {
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
                                style={[styles.normalDot, {width}]}
                            />
                        );
                    })}
                </View>

            </View>
            <Pressable style={styles.button} onPress={buy}>
                <Text style={styles.text}>Купить!</Text>
            </Pressable>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    title: {
        fontWeight: "bold",
        fontSize: 50
    },
    description: {
        display: 'flex',
        alignItems: 'center',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    scrollContainer: {
        height: 300,
        alignItems: "center",
        justifyContent: "center"
    },
    card: {
        flex: 1,
        marginVertical: 4,
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center"
    },
    textContainer: {
        backgroundColor: "rgba(47,47,47,0.7)",
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 5
    },
    infoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    normalDot: {
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "rgba(233,241,5,0.84)",
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: "rgb(51,51,51)",
    },
});
export default App;