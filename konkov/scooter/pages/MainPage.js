import React, {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import ProfileHeader from "../components/ProfileHeader";
import InfoElement from "../components/InfoElement";
import LocationElement from "../components/LocationElement";

export default function MainPage({navigation}) {
    const [showInfoBlock, setShowInfoBlock] = useState(true);
    return (
        <View style={styles.main_container}>
            <View style={styles.header}>
                <ProfileHeader/>
            </View>
            <View style={styles.container}>
                <View style={styles.update_block_image}>
                    {showInfoBlock ? (
                        <ImageBackground
                            style={{height: 290}}
                            source={require('../assets/updated.png')}
                        >
                            <TouchableOpacity
                                style={styles.close_image}
                                onPress={() => setShowInfoBlock(!showInfoBlock)}>
                                <Image source={require('../assets/close.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.main_text_block}>
                                We updated your scooter
                            </Text>
                            <Text style={styles.secondary_text_block}>
                                Everything your scooter needed we did it for you
                            </Text>
                        </ImageBackground>
                    ) : null}
                </View>
                <LocationElement navigation={navigation}/>
                <View style={styles.info}>
                    <InfoElement title={'Total Distance'} info={'100 Км'} image={require('../assets/map.png')}/>
                    <InfoElement title={'Total Battery'} info={'100%'} image={require('../assets/charging.png')}/>
                    <InfoElement title={'Average Speed'} info={'1 000 Км/ч'} image={require('../assets/zap_on.png')}/>
                    <InfoElement title={'Ride Updated'} info={'Today'} image={require('../assets/share.png')}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    info: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    main_container: {
        paddingTop: 64,
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 24,
        width: '85%',
        height: '100%',
    },
    update_block_image: {
        width: '100%',
    },
    container: {
        display: 'flex',
        height: '100%',
        gap: 16,
    },
    main_text_block: {
        color: 'white',
        paddingTop: '8%',
        paddingLeft: '16%',
        paddingRight: '32%',
        fontWeight: 'bold',
        fontSize: 20,
    },
    secondary_text_block: {
        color: 'white',
        paddingTop: '4%',
        paddingLeft: '12%',
        paddingRight: '24%',
    },
    close_image: {
        paddingLeft: '90%',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
