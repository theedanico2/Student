import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { enableScreens } from 'react-native-screens'; //add this

import First from '../screens/Start';
import Second from "../screens/Second";
import Third from "../screens/Third";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={First} />
      <Drawer.Screen name="Profile" component={Second} />
      <Stack.Screen name="Settings" component={Third} />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
    enableScreens()
    return (
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="First" component={First}/>
          <Stack.Screen name="Second" component={Second}/>
          <Stack.Screen name="Third" component={Third}/>
        </Stack.Navigator>
    );
}

export default MyStack;