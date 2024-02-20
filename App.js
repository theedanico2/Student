import React from 'react'; 
import { Text, View, Button, Image } from 'react-native';

const YourApp = () => {
return (
<View style={{ flex: 1, justifyContent: "center", alignItems: "center", width: "100%"}}> 
<Image source={require('./assets/snack-icon.png')} style={{ width: 100, height: 100, marginBottom: 20 }} />
<Text style={{ marginBottom: 20, fontSize: 40}}>
Hello, world
</Text>
 <Button 
        title="Hello!"
        color="red"
      />
</View>
);
}
export default YourApp;