import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  image: ImageStyle;
  visitText: TextStyle;
  linkText: TextStyle;
  textContainer: ViewStyle;
}

type Colors = ExtendedTheme['colors'];

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    image: {
      width: 120,
      height: 70,
      borderRadius: 8,
    },
    visitText: {
      fontSize: 16,
      fontFamily: 'Montserrat-Medium',
      color: colors.textPrimary,
    },
    linkText: {
      fontSize: 14,
      fontFamily: 'Montserrat-Regular',
      color: colors.textSecondary,
    },
    textContainer: {
      paddingLeft: 20,
      justifyContent: 'center',
    },
  });

export default makeStyles;
