import React from 'react';
interface AppContextInterface {
  colorPattern: string;
  isDarkTheme: boolean;
  setColorPattern: (colorPattern: string) => void;
  setIsDarkTheme: (isDarkTheme: boolean) => void;
}

const defaultContextValue: AppContextInterface = {
  colorPattern: 'purple',
  isDarkTheme: false,
  setColorPattern: () => {},
  setIsDarkTheme: () => {},
};
export const AppContext =
  React.createContext<AppContextInterface>(defaultContextValue);
