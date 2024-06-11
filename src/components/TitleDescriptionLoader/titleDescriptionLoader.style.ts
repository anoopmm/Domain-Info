import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
const styles = StyleSheet.create({
  pulsating: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#efecff',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  title: {
    backgroundColor: 'grey',
    height: 16,
    margin: 4,
    borderRadius: 4,
  },
  description: {
    backgroundColor: 'grey',
    height: 8,
    margin: 4,
    borderRadius: 4,
  },
});
export default styles;
