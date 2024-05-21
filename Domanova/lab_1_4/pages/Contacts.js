import {SafeAreaView, StyleSheet} from "react-native";
import ContactPage from "./ContactPage";

const Contacts = ({navigation}) => {
    return (
        <SafeAreaView style={styles.contact_block}>
            <ContactPage name={'Denis'} phone={'89829829811'} navigation={navigation}/>
            <ContactPage name={'Ella'} phone={'89122022020'} navigation={navigation}/>
            <ContactPage name={'Sasha'} phone={'89530242158'} navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contact_block: {
        marginVertical: 16,
        display: 'flex',
        gap: 16,
    },
})
export default Contacts;