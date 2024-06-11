import {StyleSheet, ImageStyle, ViewStyle, Dimensions} from 'react-native';
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: imageWidth,

    height: imageWidth / 1.9,
  } as ViewStyle,
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: imageWidth,

    height: imageWidth / 1.9,
    backgroundColor: '#fff',
  } as ViewStyle,
  loading: {
    position: 'absolute',
    zIndex: 1,
  } as ViewStyle,
  image: {
    width: imageWidth,

    height: imageWidth / 1.9,
  } as ImageStyle,
});

export default styles;
