import {StyleSheet, ViewStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  button: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    button: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 20,
      right: 20,
      shadowColor: colors.textPrimary,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 4,
      zIndex: 100,
    },
  });
export default makeStyles;
