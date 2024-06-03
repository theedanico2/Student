import {Image, Text, View, StyleSheet} from "react-native";

export default function InfoElement({title, info, image}) {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.item}>
                <Text style={styles.item_title}>{title}</Text>
                <Image source={image}/>
                <Text style={styles.item_info}>{info}</Text>
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
    item_title: {
        color: '#55418E',
        fontWeight: 'bold',
    },
    item_info: {
        color: '#FFA500',
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
})