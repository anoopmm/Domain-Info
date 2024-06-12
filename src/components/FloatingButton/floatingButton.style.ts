import {StyleSheet} from 'react-native';
const makeStyles = (colors: any) =>
  StyleSheet.create({
    button: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 20,
      right: 20,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
      zIndex: 100,
    },
  });
export default makeStyles;
