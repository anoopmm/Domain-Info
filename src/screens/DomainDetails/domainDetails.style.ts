import {StyleSheet} from 'react-native';

const makeStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    detailsContainer: {
      flex: 1,
    },
    domainView: {
      justifyContent: 'center',
      margin: 8,
    },
    domainText: {
      fontSize: 30,
      textAlign: 'center',
      color: colors.textPrimary,
      fontFamily: 'Montserrat-Medium',
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 16,
    },
    validationMessage: {
      color: 'red',
      marginBottom: 8,
    },
    rowstyle: {
      flexDirection: 'row',
    },
    coloumnStyle: {
      flex: 1,
    },
  });
export default makeStyles;
