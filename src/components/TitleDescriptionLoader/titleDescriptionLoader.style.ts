import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
const styles = (colors: any) =>
  StyleSheet.create({
    pulsating: {
      // justifyContent: 'center',
      // alignItems: 'center',
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
    },
    title: {
      backgroundColor: colors.textSecondary,
      height: 16,
      margin: 4,
      borderRadius: 4,
    },
    description: {
      backgroundColor: colors.textSecondary,
      height: 8,
      margin: 4,
      borderRadius: 4,
    },
  });
export default styles;
