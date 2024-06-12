import React, {useMemo, useState} from 'react';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/Home/home';
import DomainDetailsScreen from './screens/DomainDetails/domainDetails';
import SettingsScreen from './screens/Settings/settings';
import darkThemePurple from './theme/darkThemePurple';
import darkThemeRed from './theme/darkThemeRed';
import darkThemeTeal from './theme/darkThemeTeal';
import darkThemeIndigo from './theme/darkThemeIndigo';
import lightThemeIndigo from './theme/lightThemeIndigo';
import lightThemePurple from './theme/lightThemePurple';
import lightThemeRed from './theme/lightThemeRed';
import lightThemeTeal from './theme/lightThemeTeal';
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
  const getTheme = (): Theme => {
    if (isDarkTheme) {
      switch (colorPattern) {
        case 'purple':
          return darkThemePurple;
        case 'red':
          return darkThemeRed;
        case 'teal':
          return darkThemeTeal;
        case 'indigo':
          return darkThemeIndigo;
        default:
          return darkThemePurple;
      }
    } else {
      switch (colorPattern) {
        case 'purple':
          return lightThemePurple;
        case 'red':
          return lightThemeRed;
        case 'teal':
          return lightThemeTeal;
        case 'indigo':
          return lightThemeIndigo;
        default:
          return lightThemePurple;
      }
    }
  };
  let theme = getTheme();
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
