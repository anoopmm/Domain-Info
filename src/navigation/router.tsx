import React, {useMemo, useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  ExtendedTheme,
} from '@react-navigation/native';
import {StatusBar, SafeAreaView} from 'react-native';
import themes from '../theme';
import {AppContext} from '../theme/appContext';
import makeStyles from './navigation.styles';
import HomeStackScreen from './homeStack';

// Main router component
const Router: React.FC = () => {
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
      ? (themes.dark[colorAccent as keyof typeof themes.dark] as ExtendedTheme)
      : (themes.light[
          colorAccent as keyof typeof themes.light
        ] as ExtendedTheme);
  };

  // Retrieve the current theme object
  const theme = getTheme();
  const {colors} = theme;

  // Memoizing the styles to avoid recalculating on each render
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
      />
      <AppContext.Provider value={appContext}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <HomeStackScreen />
        </SafeAreaView>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default Router;
