import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const MainScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [weddingDate, setWeddingDate] = useState('Не указана');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setWeddingDate(date.toLocaleDateString());
    hideDatePicker();
  };

  const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

  return (
<View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center', backgroundColor: "#FFFDED" }}>
      <View style={{width:"100%", height: "100%"}}>
        <Text style={styles.title}>Информация о свадьбе</Text>
        <View style={{marginHorizontal: 20, marginTop: 24, height: 120, flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={styles.card} onPress={showDatePicker}>
        <View>
          <Text style={styles.cardtitle}>Дата свадьбы</Text>
          <Text style={styles.cardtext}>{weddingDate}</Text>
        </View>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
        <Image source={require('../assets/Pic.png')} style={{height: 120, width: 120, elevation: 12, shadowColor: "#A7A7A7",}} />
        </View>
        <AppButton title="Перейти в конфигуратор" backgroundColor="#FF8787" onPress={() => navigation.navigate('ConfScreen')} /> 
      </View>
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('MainScreen')}>
          <Svg width={30} height={32} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M3.33758 5.66899C0.565535 8.10633 0 8.60358 0 14.6413C0 25 2.45233 25 12 25C21.5477 25 24 25 24 14.6413C24 8.60282 23.4352 8.1062 20.6626 5.66806C20.2032 5.26417 19.6833 4.80697 19.0953 4.2625C18.8124 4.03494 18.5043 3.77558 18.1766 3.49973C16.3893 1.99512 14.0193 0 11.9649 0C9.9388 0 7.64598 1.94817 5.89041 3.43985C5.5385 3.73886 5.20816 4.01954 4.9059 4.2625C4.31749 4.80739 3.7972 5.26486 3.33758 5.66899ZM7.36057 17.6693C7.36057 17.117 7.80828 16.6693 8.36057 16.6693H15.6399C16.1922 16.6693 16.6399 17.117 16.6399 17.6693C16.6399 18.2215 16.1922 18.6693 15.6399 18.6693H8.36057C7.80828 18.6693 7.36057 18.2215 7.36057 17.6693Z" fill="#FF8787" stroke="white" stroke-width={2} stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
          <Text style={styles.tabLabel}>Главная</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('PlanScreen')} >
<Svg width={30} height={32} viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M15.0882 1.11515C14.2894 1.03838 13.4224 1 12.4932 1C3.87671 1 1 4.13513 1 13.5C1 22.8784 3.87671 26 12.4932 26C21.1233 26 24 22.8784 24 13.5C24 11.9105 23.9159 10.4971 23.7389 9.2523H19.6964C17.1512 9.2523 15.0882 7.21851 15.0882 4.7077V1.11515Z" fill="white"/>
<Path d="M23.6164 8.5L15.8493 1.2027C15.603 1.16942 15.3493 1.14024 15.0882 1.11515V4.7077C15.0882 7.21851 17.1512 9.2523 19.6964 9.2523H23.7389C23.7022 8.99432 23.6611 8.74358 23.6164 8.5Z" fill="white"/>
<Path d="M15.5966 18.162H8.19931M12.7953 12.7414H8.19808M23.6164 8.5L15.8493 1.2027C15.603 1.16942 15.3493 1.14024 15.0882 1.11515M23.6164 8.5C23.8767 9.91892 24 11.5811 24 13.5M23.6164 8.5C23.6611 8.74358 23.7022 8.99432 23.7389 9.2523M24 13.5C24 22.8784 21.1233 26 12.4932 26C3.87671 26 1 22.8784 1 13.5C1 4.13513 3.87671 1 12.4932 1C13.4224 1 14.2894 1.03838 15.0882 1.11515M24 13.5C24 11.9105 23.9159 10.4971 23.7389 9.2523M15.0882 1.11176V1.11515M23.7389 9.2523H19.6964C17.1512 9.2523 15.0882 7.21851 15.0882 4.7077V1.11515" stroke="#FF8787" stroke-width={4} stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
          <Text style={styles.tabLabel}>План</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton} onPress={() => navigation.navigate('FavoriteScreen')}>
          <Svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M1.50876 14.104C0.0402142 9.16948 1.75786 3.03443 6.57136 1.36699C9.10334 0.487605 12.2279 1.22116 14.0031 3.85636C15.6769 1.12394 18.8918 0.493497 21.4211 1.36699C26.2332 3.03443 27.9604 9.16948 26.4933 14.104C24.2076 21.9257 16.2326 26 14.0031 26C11.7749 26 3.87103 22.017 1.50876 14.104Z" fill="white"/>
<Path d="M19.1186 6.9124C20.7706 7.09505 21.8039 8.50471 21.7423 10.48M1.50876 14.104C0.0402142 9.16948 1.75786 3.03443 6.57136 1.36699C9.10334 0.487605 12.2279 1.22116 14.0031 3.85636C15.6769 1.12394 18.8918 0.493497 21.4211 1.36699C26.2332 3.03443 27.9604 9.16948 26.4933 14.104C24.2076 21.9257 16.2326 26 14.0031 26C11.7749 26 3.87103 22.017 1.50876 14.104Z" stroke="#FF8787" stroke-width={2} stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
          <Text style={styles.tabLabel}>Избранное</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize:24,
    textAlign:'left',
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginHorizontal: 19,
    marginBottom: 8,
    marginTop: 76
  },

  appButtonContainer: {
    backgroundColor: "#FF8787",
    height: 60,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 36,
    justifyContent: 'center',
    elevation: 12,
    shadowColor: "red"
  },

  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center"
  },

  card: {
    flex: 1,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 12,
    shadowColor: "#A7A7A7",
    marginRight: 12
  },

  cardtitle: {
    fontSize:16,
    textAlign:'left',
    fontWeight: 'medium',
    color: '#909090',
    marginLeft: 20,
    marginTop: 26
  },

  cardtext: {
    fontSize:24,
    textAlign:'left',
    fontWeight: 'bold',
    color: '#FF8787',
    marginLeft: 20,
    marginTop: 6
  },

bottomTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 88,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  tabButton: {
    alignItems: 'center',
  },

  tabLabel: {
    fontSize: 10,
    marginTop: 4,
    color: '#FF8787',
  },

});

export default MainScreen;