import React from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

export default function ProfileHeader() {
    return (
        <View style={styles.main_container}>
            <View style={styles.header}>
                <View style={styles.profile_name_photo}>
                    <Image source={require("../assets/profile.png")}/>
                    <View>
                        <Text style={styles.avatar_text}>Danil Konkov</Text>
                        <Text>Welcome back!</Text>
                    </View>
                </View>
                <Image source={require("../assets/dots.png")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 24,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profile_name_photo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    avatar_text: {
        fontWeight: 'bold'
    }
});
