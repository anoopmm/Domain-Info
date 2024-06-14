import React, {useMemo, useContext} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './colorAccentSelection.styles';
import colorAccents from '../../../../constants/theme';
import ColorToggleButton from '../ColorToggleButton/colorToggleButton';
import {AppContext} from '../../../../theme/appContext';

interface ColorPattern {
  color: string;
  value: string;
}

const ColorAccentSelection: React.FC = () => {
  const {colors} = useTheme();
  const {setColorAccent, colorAccent} = useContext(AppContext);
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const renderColorButtons = () => {
    return colorAccents.map((item: ColorPattern) => (
      <ColorToggleButton
        key={item.color}
        color={item.color}
        value={item.value}
        selected={colorAccent === item.color}
        onClick={setColorAccent}
      />
    ));
  };

  return (
    <View style={styles.colorAccentContainer}>
      <Text style={styles.labelText}>Select Color Pattern</Text>
      <View style={styles.colorButtonContainer}>{renderColorButtons()}</View>
    </View>
  );
};

export default ColorAccentSelection;
