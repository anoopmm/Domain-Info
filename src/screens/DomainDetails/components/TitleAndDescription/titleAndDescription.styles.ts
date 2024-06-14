import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  desc: TextStyle;
  titleLoaderContainer: ViewStyle;
  descLoaderContainer: ViewStyle;
  titleLoaderStyle: ViewStyle;
  descLoaderStyle: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {} as ViewStyle,
    title: {
      fontSize: 20,
      fontFamily: 'Montserrat-SemiBold',
      marginTop: 10,
      color: colors.textPrimary,
    },
    desc: {
      fontSize: 14,
      fontFamily: 'Montserrat-Medium',
      marginTop: 10,
      color: colors.textPrimary,
    },
    titleLoaderContainer: {
      marginTop: 10,
    },
    descLoaderContainer: {
      marginTop: 10,
    },
    titleLoaderStyle: {
      height: 16,
      borderRadius: 8,
    },
    descLoaderStyle: {
      height: 12,
      borderRadius: 6,
    },
  });

export default makeStyles;
