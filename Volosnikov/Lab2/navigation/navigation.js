import {createStackNavigator} from '@react-navigation/stack';
import Register from "../screens/Register";
import Login from "../screens/Login";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Авторизация" component={Login}/>
            <Stack.Screen name="Регистрация" component={Register}/>
        </Stack.Navigator>
    );
}

export default MyStack;