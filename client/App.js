import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/account/Account';
import Notifications from './screens/account/Notifications';
import Profile from './screens/account/Profile';
import MyOrders from './screens/account/MyOrders';
import Dashboard from './screens/admin/Dashboard';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        // Routes:
        <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen name="home" component={Home} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="productDetails" component={ProductDetails}/>
                <Stack.Screen name="checkout" component={Checkout}/>
                <Stack.Screen name="myorders" component={MyOrders}/>
                <Stack.Screen name="profile" component={Profile}/>
                <Stack.Screen name="notification" component={Notifications}/>
                <Stack.Screen name="adminPanel" component={Dashboard}/>
                <Stack.Screen name="login" component={Login} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="register" component={Register} options={{
                    headerShown: false,
                }}/>
                <Stack.Screen name="payment" component={Payment}/>
                <Stack.Screen name="account" component={Account}/>
                <Stack.Screen name="cart" component={Cart}/>
                <Stack.Screen name="mobile" component={About}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}