import {createStackNavigator} from '@react-navigation/stack';
import StartPage from "../pages/StartPage";
import MainPage from "../pages/MainPage";
import MapPage from "../pages/MapPage"


const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="StartPage" component={StartPage}/>
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="MapPage" component={MapPage}/>
        </Stack.Navigator>
    );
}

export default MyStack;