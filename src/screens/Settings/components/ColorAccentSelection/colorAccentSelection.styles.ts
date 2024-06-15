import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  colorAccentContainer: ViewStyle;
  labelText: TextStyle;
  colorButtonContainer: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    colorAccentContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
      height: 60,
      borderBottomWidth: 0.4,
      borderBottomColor: colors.border,
      paddingVertical: 10,
    },
    labelText: {
      fontSize: 16,
      color: colors.text,
      fontFamily: 'Montserrat-Medium',
    },
    colorButtonContainer: {
      flexDirection: 'row',
      gap: 8,
    },
  });

export default makeStyles;
