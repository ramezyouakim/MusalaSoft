import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainBottomTabParamList} from './MainBottomTabParams';

// Screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import localStrings from '../local/main';

const BottomTab = createBottomTabNavigator<MainBottomTabParamList>();

function MainBottomTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="HomeScreen" options={() => ({ title: localStrings.news })} component={HomeScreen}  />
      <BottomTab.Screen name="SettingsScreen" options={() => ({ title: localStrings.settings })} component={SettingsScreen}/>
    </BottomTab.Navigator>
  );
}

export default MainBottomTab;