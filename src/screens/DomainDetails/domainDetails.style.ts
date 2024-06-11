import {StyleSheet} from 'react-native';

const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    detailsContainer: {
      flex: 1,
      backgroundColor: '#fff',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderRadius: 10,
      padding: 8,
    },
    domainView: {
      justifyContent: 'center',
      margin: 8,
    },
    domainText: {
      fontSize: 30,
      textAlign: 'center',
      color: colors.textPrimary,
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
  });
export default styles;
