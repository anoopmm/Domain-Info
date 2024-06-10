import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/home';
import DetailsScreen from './screens/DomainDetails/domainDetails';
import SettingsScreen from './screens/Settings/settings';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Settings: undefined;
};

export type RootTabParamList = {
  HomeStack: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function HomeStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <HomeStackScreen />
    </NavigationContainer>
  );
}
