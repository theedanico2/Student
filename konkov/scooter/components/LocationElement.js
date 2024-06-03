import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default function LocationElement({navigation}) {
    return (
        <View style={styles.location}>
            <View>
                <Text style={styles.location_text}>Your Scooter</Text>
                <Text style={styles.location_text}>Location</Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MapPage');
                }}>
                <Image source={require('../assets/maps.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFA500',
        borderRadius: 24,
        paddingTop: 16,
        paddingBottom: 16,
        paddingHorizontal: 32,
    },
    location_text: {
        color: 'white',
    },
})