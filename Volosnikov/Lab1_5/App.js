import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions,
  Text,
  Button,
  Easing,
} from 'react-native';
const images = new Array(6).fill(
  'https://media.istockphoto.com/id/955952680/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D1%8B-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D1%81%D0%B0%D0%BC%D0%BE%D0%BB%D0%B5%D1%82%D0%B0-%D0%BF%D1%80%D0%BE%D0%BB%D0%B5%D1%82%D0%B5%D0%BB%D0%B8-%D0%BD%D0%B0%D0%B4-%D0%BE%D0%B1%D0%BB%D0%B0%D0%BA%D0%B0%D0%BC%D0%B8.jpg?s=612x612&w=0&k=20&c=F7_7z0JPjPP7u5evEoJ31qyEKHzf6zALQ9e6lPtvwVQ='
);
const App = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();
  const [rotateAnim] = useState(new Animated.Value(0));
  const currIndex = useRef(0);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 2,
        duration: 5000,
        easing: Easing.bounce,
        useNativeDriver: true,
      })
    ).start();
  }, []);
  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scrollContainer}>
        <ScrollView
          horizontal={true}
          style={styles.scrollViewStyle}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ])}
          scrollEventThrottle={1}
          ref={(node) => (this.scroll = node)}>
          {images.map((image, imageIndex) => {
            return (
              <Animated.View
                style={{
                  width: windowWidth,
                  height: 250,
                  transform: [
                    {
                      rotate: rotateInterpolate,
                    },
                  ],
                }}
                key={imageIndex}>
                <ImageBackground source={{ uri: image }} style={styles.card}>
                  <View style={styles.textContainer}>
                    <Text style={styles.infoText}>
                      {'Image - ' + imageIndex}
                    </Text>
                  </View>
                </ImageBackground>
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
                windowWidth * (imageIndex + 1),
              ],
              outputRange: [8, 16, 8],
              extrapolate: 'clamp',
            });
            return (
              <Animated.View
                key={imageIndex}
                style={[styles.normalDot, { width }]}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: 'row', columnGap: 20 }}>
          <Button
            title="Назад"
            onPress={() => {
              currIndex.current -= 1;
              this.scroll.scrollTo({ x: windowWidth * currIndex.current });
            }}
          />
          <Button
            title="Вперед"
            onPress={() => {
              currIndex.current += 1;
              this.scroll.scrollTo({ x: windowWidth * currIndex.current });
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0, 0.7)',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
  },
  infoText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'silver',
    marginHorizontal: 4,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
