import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.backgroundSecondary,
      margin: 10,
      shadowColor: colors.textPrimary,
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
      padding: 10,
      //   borderWidth: 1,
      borderColor: colors.border,
    } as ViewStyle,
    title: {
      fontSize: 20,
      marginBottom: 5,
      color: colors.textPrimary,
      fontFamily: 'Montserrat-Medium',
    } as TextStyle,
    description: {
      fontSize: 16,
      color: colors.textSecondary,
      fontFamily: 'Montserrat-Medium',
    } as TextStyle,
  });
export default makeStyles;
