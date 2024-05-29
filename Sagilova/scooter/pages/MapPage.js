import {useEffect, useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapPage({navigation}) {
    const [region, setRegion] = useState({
        latitude: 56.838011,
        longitude: 60.597474,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0121,
    });
    const [userLatitude, setUserLatitude] = useState(null);
    const [userLongitude, setUserLongitude] = useState();
    const [locationStatus, setLocationStatus] = useState();

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setLocationStatus(false);
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            setUserLatitude(location.coords.latitude);
            setUserLongitude(location.coords.longitude);
            setLocationStatus(true);
        })();
    }, []);
    
    useEffect(() => {
        if (locationStatus) {
            setRegion({
                latitude: userLatitude,
                longitude: userLongitude,
                latitudeDelta: 0.0111,
                longitudeDelta: 0.0111,
            });
        }
    }, [locationStatus]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profile_name_photo}>
                    <Image style={styles.avatar_image} source={require("../assets/profile.png")}/>
                    <View>
                        <Text style={styles.avatar_text}>Eila Sagilova</Text>
                        <Text style={styles.app_text}>Welcome back!</Text>
                    </View>
                </View>
                <Image source={require("../assets/dots.png")}/>
            </View>
            <View>
                <View style={styles.body}>
                    <Text style={styles.title}>Scooter Location</Text>
                    <MapView style={styles.map} region={region}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 64,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 24,
        width: '85%',
        height: '100%',
    },
    body: {
        height: '95%',
        borderColor: '#acacac',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 16,
        gap: 16,
    },
    title: {
        fontSize: 16,
        color: '#55418E',
        top: 24,
        left: 16,
        fontWeight: 'bold'
    },
    map: {
        flex: 1,
        margin: 16,
        borderRadius: 8,
    },
    profile_name_photo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    avatar_text: {
        fontWeight: 'bold'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
