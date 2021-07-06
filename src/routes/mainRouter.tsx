import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routerStackParamList } from './routerParamsList';

// Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';

// Components

// Main Navigators
const Stack = createStackNavigator<routerStackParamList>();

// Main App Navigator
function AppNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={() => ({

                })}>
                <Stack.Screen name="HomeScreen" options={() => ({ title: "Home" })} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;