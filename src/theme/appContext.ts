import React from 'react';
interface AppContextInterface {
  colorAccent: string;
  isDarkTheme: boolean;
  setColorAccent: (colorPattern: string) => void;
  setIsDarkTheme: (isDarkTheme: boolean) => void;
}

const defaultContextValue: AppContextInterface = {
  colorAccent: 'purple',
  isDarkTheme: false,
  setColorAccent: () => {},
  setIsDarkTheme: () => {},
};
export const AppContext =
  React.createContext<AppContextInterface>(defaultContextValue);
