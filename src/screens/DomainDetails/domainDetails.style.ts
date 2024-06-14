import {StyleSheet, Dimensions, ViewStyle, TextStyle} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  scrollContainer: ViewStyle;
  detailsContainer: ViewStyle;
  domainName: TextStyle;
}

type Colors = ExtendedTheme['colors'];

const {height} = Dimensions.get('window');

// Define a function that returns the styles
const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      height: height,
      flexDirection: 'column',
    },
    scrollContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    detailsContainer: {
      flex: 1,
      flexDirection: 'column',
      padding: 16,
    },
    domainName: {
      fontSize: 32,
      fontFamily: 'Montserrat-Medium',
      color: colors.textSecondary,
    },
  });

export default makeStyles;
