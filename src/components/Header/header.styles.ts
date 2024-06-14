import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  titleContainer: ViewStyle;
  title: TextStyle;
  headerStyle: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    headerStyle: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 14,
      paddingBottom: 14,
    },
    titleContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 20,
      color: colors.textPrimary,
    },
  });

export default makeStyles;
