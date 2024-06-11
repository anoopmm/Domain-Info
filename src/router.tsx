import React, {useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/home';
import DomainDetailsScreen from './screens/DomainDetails/domainDetails';
import SettingsScreen from './screens/Settings/settings';
import DarkTheme from './theme/darkTheme';
import LightTheme from './theme/lightTheme';
import {AppContext} from './theme/appContext';

export type RootStackParamList = {
  Home: undefined;
  DomainDetails: {url: string};
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
}

export default function Router() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [colorPattern, setColorPattern] = useState('purple');
  const appContext = useMemo(() => {
    return {isDarkTheme, setIsDarkTheme, colorPattern, setColorPattern};
  }, [isDarkTheme, colorPattern]);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : LightTheme}>
      <AppContext.Provider value={appContext}>
        <HomeStackScreen />
      </AppContext.Provider>
    </NavigationContainer>
  );
}
