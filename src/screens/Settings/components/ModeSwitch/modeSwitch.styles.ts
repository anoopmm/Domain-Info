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
      alignItems: 'center',
      height: 60,
      borderBottomWidth: 0.4,
      borderBottomColor: colors.border,
    },
    labelText: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Montserrat-Medium',
    },
    switchLabelContainer: {
      justifyContent: 'center',
    },
  });

export default makeStyles;
