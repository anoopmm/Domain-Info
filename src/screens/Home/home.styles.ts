import {StyleSheet} from 'react-native';
const makeStyles = (colors: any) =>
  StyleSheet.create({
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
      fontSize: 18,
      marginBottom: 8,
      color: colors.textPrimary,
      fontFamily: 'Montserrat-Medium',
    },
    input: {
      height: 40,
      borderColor: colors.border,
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 16,
      backgroundColor: colors.backgroundSecondary,
      borderRadius: 8,
      fontFamily: 'Montserrat-Medium',
      color: colors.textPrimary,
    },
    validationMessage: {
      color: colors.notification,
      marginBottom: 8,
    },
    button: {
      backgroundColor: colors.primary,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: colors.white,
      fontSize: 20,
      fontFamily: 'Montserrat-Medium',
    },
  });
export default makeStyles;
