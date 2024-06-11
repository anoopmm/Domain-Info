import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
const styles = (colors: any) =>
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
      borderWidth: 1,
      borderColor: colors.border,
    } as ViewStyle,
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
      color: colors.textPrimary,
    } as TextStyle,
    description: {
      fontSize: 16,
      color: colors.textSecondary,
    } as TextStyle,
  });
export default styles;
