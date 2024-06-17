import { createStackNavigator } from '@react-navigation/stack';
import Onboard1 from './Onboard1';
import Onboard2 from './Onboard2';
import Onboard3 from './Onboard3';
import Onboard4 from './Onboard4';
import Onboard5 from './Onboard5';
import LoginScreen from './LoginScreen'
import RegisterScreen from './RegisterScreen'
import MainScreen from './MainScreen'
import ConfScreen from './ConfScreen'
import CatalogScreen from './CatalogScreen'
import AdvScreen from './AdvScreen'
import FavoriteScreen from './FavoriteScreen'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboard1" component={Onboard1} options={{headerShown: false}}/>
      <Stack.Screen name="Onboard2" component={Onboard2} options={{headerShown: false}}/>
      <Stack.Screen name="Onboard3" component={Onboard3} options={{headerShown: false}}/>      
      <Stack.Screen name="Onboard4" component={Onboard4} options={{headerShown: false}}/>
      <Stack.Screen name="Onboard5" component={Onboard5} options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="MainScreen" component={MainScreen} options={{headerShown: false}}/>
      <Stack.Screen name="CatalogScreen" component={CatalogScreen} options={{headerShown: false}}/>
      <Stack.Screen name="AdvScreen" component={AdvScreen} options={{headerShown: false}}/>
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ConfScreen" component={ConfScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigator;