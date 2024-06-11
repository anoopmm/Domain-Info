// FloatingButton.tsx
import React, {useMemo, useContext} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
import makeStyles from './floatingButton.style';
type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

const FloatingButton: React.FC<Props> = ({onPress, style}) => {
  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  console.log(colorPattern, colors[colorPattern]);
  const styles = useMemo(
    () => makeStyles(colors[colorPattern]),
    [colors[colorPattern]],
  );
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Icon name="share" size={26} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
