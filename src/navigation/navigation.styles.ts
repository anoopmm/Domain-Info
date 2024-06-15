import {StyleSheet, ViewStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  safeAreaContainer: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    safeAreaContainer: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });

export default makeStyles;
