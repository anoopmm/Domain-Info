import {StyleSheet} from 'react-native';
const styles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
    },
    label: {
      fontSize: 18,
      marginBottom: 8,
      color: colors.textPrimary,
    },
    input: {
      height: 40,
      borderColor: '#fff',
      borderWidth: 1,
      paddingHorizontal: 8,
      marginBottom: 16,
      backgroundColor: colors.card,
      borderRadius: 8,
    },
    validationMessage: {
      color: 'red',
      marginBottom: 8,
    },
    button: {
      backgroundColor: colors.primary,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: colors.white,
      fontSize: 20,
    },
  });
export default styles;
