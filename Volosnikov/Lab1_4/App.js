
import MyStack from "./navigation/navigation";
import {NavigationContainer, View} from '@react-navigation/native';


// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
      <NavigationContainer>
          <MyStack/>
      </NavigationContainer>
  );
}


