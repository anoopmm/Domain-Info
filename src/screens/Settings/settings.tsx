import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../router';
import makeStyles from './settings.styles';
import Header from '../../components/Header/header';
import DarkModeSwitch from './components/ModeSwitch/modeSwitch';
import ColorAccentSelection from './components/ColorAccentSelection/colorAccentSelection';

type SettingsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

interface SettingsProps {
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC<SettingsProps> = ({navigation}) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation} showLeftButton title="Settings" />
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <DarkModeSwitch />
        <ColorAccentSelection />
      </View>
    </View>
  );
};

export default SettingsScreen;
