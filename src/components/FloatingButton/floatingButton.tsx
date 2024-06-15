import React, {useMemo} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import makeStyles from './floatingButton.style';

type Props = {
  onPress: () => void;
  icon: string;
  style?: ViewStyle;
  disabled?: boolean;
};

const FloatingButton: React.FC<Props> = ({
  onPress,
  icon,
  style,
  disabled = false,
}) => {
  const {colors} = useTheme();

  // Memoize styles to avoid unnecessary re-renders
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}>
      <Icon name={icon} size={26} color={'#fff'} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
