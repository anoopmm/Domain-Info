import {StyleSheet, ViewStyle} from 'react-native';
interface Styles {
  colorButton: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});

export default styles;
