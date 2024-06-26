import '@react-navigation/native';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary?: string;
      danger?: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      textPrimary?: string;
      textSecondary?: string;
      backgroundSecondary?: string;
      white?: string;
      black?: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
