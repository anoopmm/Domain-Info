import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
const styles = StyleSheet.create({
  container: {
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
  } as ViewStyle,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  } as TextStyle,
  description: {
    fontSize: 16,
    color: '#666',
  } as TextStyle,
});
export default styles;
