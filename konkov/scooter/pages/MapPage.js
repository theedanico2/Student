import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import ProfileHeader from "../components/ProfileHeader";

export default function MapPage() {
    const [region, setRegion] = useState({
        latitude: 56.838011,
        longitude: 60.597474,
        latitudeDelta: 0.0111,
        longitudeDelta: 0.0111,
    });
    const [locationStatus, setLocationStatus] = useState();
    const [userLocation, setUserLocation] = useState();

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log(status)
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            setUserLocation(location.coords)
            setLocationStatus(true);
        })();
    }, []);
    useEffect(() => {
        if (locationStatus) {
            setRegion({
                latitude: userLocation.latitude,
                longitude: userLocation.longitude,
                latitudeDelta: 0.1111,
                longitudeDelta: 0.1111,
            });
        }
    }, [locationStatus]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <ProfileHeader/>
            </View>
            <View style={styles.map_container}>
                <Text style={styles.title}>Scooter Location</Text>
                <MapView style={styles.map} region={region} showsUserLocation={true}/>
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
    map_container: {
        height: '85%',
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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
