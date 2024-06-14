import {StyleSheet, ViewStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native'; // Ensure Theme is imported correctly

interface Styles {
  container: ViewStyle;
  pulsating: ViewStyle;
  labelContainer: ViewStyle;
  valueContainer: ViewStyle;
  title: ViewStyle;
  description: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors) =>
  StyleSheet.create<Styles>({
    container: {
      borderTopColor: colors.border,
      borderTopWidth: 1,
      flex: 1,
      flexDirection: 'row',
      minHeight: 70,
      alignItems: 'center',
    },
    pulsating: {
      backgroundColor: colors.textPrimary,
      height: 14,
      margin: 4,
      borderRadius: 8,
      opacity: 0.4,
    },
    labelContainer: {
      flex: 0.3,
    },
    valueContainer: {
      flex: 0.7,
    },
    title: {
      backgroundColor: colors.textSecondary,
      height: 14,
      margin: 4,
      borderRadius: 8,
      opacity: 0.3,
    },
    description: {
      backgroundColor: colors.textPrimary,
      height: 14,
      margin: 4,
      borderRadius: 8,
      opacity: 0.3,
    },
  });

export default makeStyles;
