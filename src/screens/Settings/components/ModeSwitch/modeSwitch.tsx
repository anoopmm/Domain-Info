import React, {useContext, useMemo} from 'react';
import {View, Text, Switch} from 'react-native';
import {AppContext} from '../../../../theme/appContext';
import makeStyles from './modeSwitch.styles';
import {useTheme} from '@react-navigation/native';

const DarkModeSwitch: React.FC = () => {
  const {isDarkTheme, setIsDarkTheme} = useContext(AppContext);
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={styles.switchContainer}>
      <View style={styles.switchLabelContainer}>
        <Text style={styles.labelText}>Dark Mode</Text>
      </View>
      <Switch
        value={isDarkTheme}
        onValueChange={() => setIsDarkTheme(!isDarkTheme)}
      />
    </View>
  );
};

export default DarkModeSwitch;
