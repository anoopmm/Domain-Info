import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './colorToggleButton.styles';

interface ColorToggleButtonProps {
  color: string;
  value: string;
  selected: boolean;
  onClick: (color: string) => void;
}

const ColorToggleButton: React.FC<ColorToggleButtonProps> = ({
  color,
  value,
  selected,
  onClick,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick(color)}
      style={[styles.colorButton, {backgroundColor: value}]}>
      {selected && <Icon name="check" size={15} color="#fff" />}
    </TouchableOpacity>
  );
};

export default ColorToggleButton;
