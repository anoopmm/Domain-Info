import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

type Styles = {
  container: ViewStyle;
  contentContainer: ViewStyle;
  switchContainer: ViewStyle;
  sectionTitle: TextStyle;
};

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 16,
    },
    contentContainer: {
      flex: 1,
      paddingTop: 16,
    },
    switchContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    sectionTitle: {
      fontFamily: 'Montserrat-SemiBold',
      color: colors.textPrimary,
      fontSize: 20,
    },
  });

export default makeStyles;
