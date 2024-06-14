import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  contentContainer: ViewStyle;
  label: TextStyle;
  input: TextStyle;
  validationMessage: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: colors.text,
      fontFamily: 'Montserrat-Medium',
    },
    input: {
      height: 40,
      borderColor: colors.border,
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 8,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 8,
      fontFamily: 'Montserrat-SemiBold',
      color: colors.textSecondary,
      fontSize: 16,
    },
    validationMessage: {
      color: colors.notification,
    },
    button: {
      backgroundColor: colors.primary,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontFamily: 'Montserrat-Medium',
    },
  });

export default makeStyles;
