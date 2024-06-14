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
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginVertical: 10,
    },
    labelText: {
      fontSize: 16,
      color: colors.textSecondary,
      fontFamily: 'Montserrat-Medium',
    },
    colorButtonContainer: {
      flexDirection: 'row',
    },
  });

export default makeStyles;
