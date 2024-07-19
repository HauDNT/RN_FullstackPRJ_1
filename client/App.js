import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';

// routes:
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home">
                <Stack.Screen name="home" component={Home} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="mobile" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}