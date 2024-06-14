import React, {useMemo, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/home';
import DomainDetailsScreen from './screens/DomainDetails/domainDetails';
import SettingsScreen from './screens/Settings/settings';
import themes from './theme';
import {AppContext} from './theme/appContext';

// Define the types for navigation parameters
export type RootStackParamList = {
  Home: undefined;
  DomainDetails: {url: string};
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

// Screen component for Home stack
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

// Main router component
export default function Router() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [colorAccent, setColorAccent] = useState('purple');

  // Memoized context value to avoid unnecessary re-renders
  const appContext = useMemo(
    () => ({
      isDarkTheme,
      setIsDarkTheme,
      colorAccent,
      setColorAccent,
    }),
    [isDarkTheme, colorAccent],
  );

  // Function to get the current theme based on state
  const getTheme = (): typeof DefaultTheme | typeof DarkTheme => {
    return isDarkTheme
      ? themes.dark[colorAccent as keyof typeof themes.dark]
      : themes.light[colorAccent as keyof typeof themes.light];
  };

  // Retrieve the current theme object
  const theme = getTheme();

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <AppContext.Provider value={appContext}>
        <HomeStackScreen />
      </AppContext.Provider>
    </NavigationContainer>
  );
}
