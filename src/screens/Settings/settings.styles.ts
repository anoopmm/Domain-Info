import {StyleSheet} from 'react-native';

const styles = (colors: any) =>
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
    label: {
      fontSize: 18,
      marginBottom: 8,
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
    },
  });
export default styles;
