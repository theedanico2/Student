import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from "../pages/register";
import LoginScreen from "../pages/login";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Аутентификация" component={LoginScreen}/>
            <Stack.Screen name="Регистрация" component={RegisterScreen}/>
        </Stack.Navigator>
    );
}

export default MyStack;