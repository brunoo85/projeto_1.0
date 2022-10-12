import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import Infos from './screens/Infos';
import StreamingScreen from './screens/StreamingScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Infos" component={Infos} />
        <Stack.Screen name="StreamingScreen" component={StreamingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
     </NavigationContainer>
  );
}
