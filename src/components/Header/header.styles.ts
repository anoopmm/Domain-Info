import {StyleSheet} from 'react-native';
const makeStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 16, // Adjust this value to position the header properly
    paddingBottom: 16, // Adjust this value to position the header properly
    backgroundColor: 'transparent', // Set the background color to transparent
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
});
export default makeStyles;
