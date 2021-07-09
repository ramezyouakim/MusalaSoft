import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { routerStackParamList } from './routerParamsList';
import { connect } from 'react-redux';

//screens
import NewArticleDetailScreen from '../screens/NewArticleDetailScreen/NewArticleDetailScreen';

// Main Navigators
import MainBottomTab from './mainBottomTab';
const Stack = createStackNavigator<routerStackParamList>();

// Main App Navigator
function AppNavigator(props) {
    const { appTheme } = props;
    const darkTheme = {
        dark: true,
        colors:{
            ...DarkTheme.colors,
            text:"#fff"
        }
    }
    return (
        <AppearanceProvider>
            <NavigationContainer theme={appTheme == 'dark' ? darkTheme : DefaultTheme}>
                <StatusBar barStyle={appTheme == 'dark' ? "light-content" : "dark-content"} />
                <Stack.Navigator
                    // initialRouteName="NewArticleDetailScreen"
                    screenOptions={() => ({

                    })}>
                    <Stack.Screen name="HomeScreen" options={() => ({ title: "News App" })} component={MainBottomTab} />
                    <Stack.Screen name="NewArticleDetailScreen" options={() => ({ title: "News App" })} component={NewArticleDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </AppearanceProvider>

    );
}

const mapStateToProps = ({ common }) => {
    const {
        appTheme
    } = common;

    return {
        appTheme
    }
}

export default connect(mapStateToProps, null)(AppNavigator)