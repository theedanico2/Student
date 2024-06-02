import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

export default function StartPage({navigation}) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}/>
            <Text style={styles.title_text}>Your scooter in one app</Text>
            <Image source={require('../assets/illustration.png')}/>
            <Text style={styles.description_text}>
                Everything you need to know about your scooter is available here your
                app
            </Text>
            <TouchableOpacity
                style={styles.next_button}
                onPress={navigation.navigate('MainPage')}>
                <Image source={require('../assets/get_started.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#55418E',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        paddingHorizontal: 32,
        gap: 32,
    },
    title_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 45,
    },
    description_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
    },
    next_button: {
        paddingLeft: "90%"
    },
});
