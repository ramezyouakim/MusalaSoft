import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainBottomTabParamList } from './MainBottomTabParams';

// Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainBottomTab() {

  const theme = useTheme()

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" options={() => ({ title: "Home" })} component={HomeScreen} initialParams={{ theme }} />
    </BottomTab.Navigator>
  );
}

export default MainBottomTab;