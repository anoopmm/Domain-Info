import {StyleSheet} from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
    contentContainer: {
      flex: 1,
      paddingTop: 50,
    },
    switchContainer: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    colorPalletContainer: {
      justifyContent: 'space-between',
      flexDirection: 'column',
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      marginTop: 20,
    },
    labelText: {
      fontSize: 18,
      color: colors.textPrimary,
      fontFamily: 'Montserrat-Medium',
    },
    colorButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 8,
    },
    switchLabelContainer: {
      justifyContent: 'center',
    },
    colorButtonContainer: {
      flexDirection: 'row',
    },
  });
export default makeStyles;
