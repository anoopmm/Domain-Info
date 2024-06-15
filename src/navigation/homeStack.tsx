import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/home';
import DomainDetailsScreen from '../screens/DomainDetails/domainDetails';
import SettingsScreen from '../screens/Settings/settings';
// Define the types for navigation parameters
export type RootStackParamList = {
  Home: undefined;
  DomainDetails: {url: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Screen component for Home stack
const HomeStackScreen: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DomainDetails"
        component={DomainDetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default HomeStackScreen;
