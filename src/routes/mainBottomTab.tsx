import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';

// Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainBottomTab() {
  return (
    <BottomTab.Navigator>
     <BottomTab.Screen name="HomeScreen" options={() => ({ title: "Home" })} component={HomeScreen} />
    </BottomTab.Navigator>
  );
}

export default MainBottomTab;