import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  labelContainer: ViewStyle;
  valueContainer: ViewStyle;
  title: TextStyle;
  description: TextStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      borderTopWidth: 1,
      borderTopColor: colors.border,
      flex: 1,
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'center',
    },
    labelContainer: {
      flex: 0.3,
    },
    valueContainer: {
      flex: 0.7,
    },
    title: {
      fontSize: 16,
      marginBottom: 5,
      color: colors.textSecondary,
      fontFamily: 'Montserrat-Regular',
    },
    description: {
      fontSize: 16,
      color: colors.textPrimary,
      fontFamily: 'Montserrat-Regular',
    },
  });

export default makeStyles;
