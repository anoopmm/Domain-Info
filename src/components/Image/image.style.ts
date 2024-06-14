import {StyleSheet, ImageStyle, ViewStyle, Dimensions} from 'react-native';
import {ExtendedTheme} from '@react-navigation/native';

interface Styles {
  container: ViewStyle;
  loaderContainer: ViewStyle;
  loading: ViewStyle;
  image: ImageStyle;
}

type Colors = ExtendedTheme['colors'];

// Get dimensions of the window
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const makeStyles = (colors: Colors): Styles =>
  StyleSheet.create<Styles>({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: imageWidth,
      height: imageWidth / 1.9,
    },
    loaderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      width: imageWidth,
      height: imageWidth / 1.9,
      backgroundColor: colors.backgroundSecondary,
    },
    loading: {
      position: 'absolute',
      zIndex: 1,
    },
    image: {
      width: imageWidth,
      height: imageWidth / 1.9,
    },
  });

export default makeStyles;
