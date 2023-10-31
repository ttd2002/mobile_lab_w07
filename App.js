import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen_2 from './Screen/Screen_2'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen_3 from './Screen/Screen_3';
import screen_1 from './Screen/screen_1';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={screen_1} options={{headerShown: false}}/>
        <Stack.Screen name="Shops near me" component={Screen_2} />
        <Stack.Screen name="Drinks" component={Screen_3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


