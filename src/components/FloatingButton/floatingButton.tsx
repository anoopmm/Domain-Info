import React, {useMemo} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import makeStyles from './floatingButton.style';
type Props = {
  onPress: () => void;
  style?: ViewStyle;
};

const FloatingButton: React.FC<Props> = ({onPress, style}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Icon name="share" size={26} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
