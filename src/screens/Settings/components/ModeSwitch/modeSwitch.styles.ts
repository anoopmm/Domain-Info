import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  switchContainer: ViewStyle;
  labelText: TextStyle;
  switchLabelContainer: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    switchContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    labelText: {
      fontSize: 16,
      color: colors.textSecondary,
      fontFamily: 'Montserrat-Medium',
    },
    switchLabelContainer: {
      justifyContent: 'center',
    },
  });

export default makeStyles;
