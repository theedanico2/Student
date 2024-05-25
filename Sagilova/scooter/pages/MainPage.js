import {useState} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

export default function MainPage({navigation}) {
    const [showUpdateBlock, setShowUpdateBlock] = useState(true);
    return (
        <View style={styles.main_container}>
            <View style={styles.header}>
                <View style={styles.profile_name_photo}>
                    <Image source={require("../assets/profile.png")}/>
                    <View>
                        <Text style={styles.avatar_text}>Eila Sagilova</Text>
                        <Text>Welcome back!</Text>
                    </View>
                </View>
                <Image source={require("../assets/dots.png")}/>
            </View>
            <View style={styles.container}>
                <View style={styles.update_block_image}>
                    {showUpdateBlock ? (
                        <ImageBackground
                            style={{height: 290}}
                            source={require('../assets/updated.png')}
                        >
                            <TouchableOpacity
                                style={styles.close_image}
                                onPress={() => setShowInfoBlock(!setShowUpdateBlock)}>
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
                <View style={styles.info}>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Total Distance</Text>
                            <Image source={require('../assets/map.png')}/>
                            <Text style={styles.item_info}>123 КМ</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Total Battery</Text>
                            <Image source={require('../assets/charging.png')}/>
                            <Text style={styles.item_info}>100%</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Average Speed</Text>
                            <Image source={require('../assets/zap_on.png')}/>
                            <Text style={styles.item_info}>45 Km/h</Text>
                        </View>
                    </View>
                    <View style={styles.itemContainer}>
                        <View style={styles.item}>
                            <Text style={styles.item_title}>Ride Updated</Text>
                            <Image source={require('../assets/share.png')}/>
                            <Text style={styles.item_info}>1 day ago</Text>
                        </View>
                    </View>
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
    itemContainer: {
        width: '50%',
    },
    item: {
        gap: 8,
        padding: 16,
        borderRadius: 16,
        borderColor: '#C8C8C8',
        borderStyle: 'solid',
        borderWidth: 2,
        marginVertical: 8,
        marginHorizontal: 8,
    },
    item_title: {
        color: '#55418E',
        fontWeight: 'bold',
    },
    item_info: {
        color: '#FFA500',
    },
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
    profile_name_photo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    avatar_text: {
        fontWeight: 'bold'
    }
});
