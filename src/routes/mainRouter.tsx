import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routerStackParamList } from './routerParamsList';

// Screens

// Components

// Main Navigators
import MainBottomTab from './mainBottomTab';
const Stack = createStackNavigator<routerStackParamList>();

// Main App Navigator
function AppNavigator() {
    return (

        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={() => ({

                })}>
                <Stack.Screen name="HomeScreen" options={() => ({ title: "Home" })} component={MainBottomTab} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;