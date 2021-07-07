import 'react-native-gesture-handler';
import * as React from 'react';
import { AppearanceProvider, useColorScheme, } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routerStackParamList } from './routerParamsList';

// Screens

// Components

// Main Navigators
import MainBottomTab from './mainBottomTab';
const Stack = createStackNavigator<routerStackParamList>();

const darkTheme = {
    dark: true,
    colors: {
        ...DarkTheme.colors,
        text: '#fff'
    },
};

// Main App Navigator
function AppNavigator() {
    const scheme = useColorScheme();
    return (
        <AppearanceProvider>
            <NavigationContainer theme={darkTheme}>
                <Stack.Navigator
                    initialRouteName="HomeScreen"
                    screenOptions={() => ({

                    })}>
                    <Stack.Screen name="HomeScreen" options={() => ({ title: "Home" })} component={MainBottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>

    );
}

export default AppNavigator;