import React, {useContext, useMemo} from 'react';
import {View, Text, Switch} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../router';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
import makeStyles from './settings.styles';
import Header from '../../components/Header/header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import colorPatterns from '../../constants/theme';
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type SettingsProps = {
  navigation: HomeScreenNavigationProp;
};
type ColorButtonProps = {
  data: any;
  selected: boolean;
  onClick: (color: string) => void;
};
const ColorButton = ({data, selected, onClick}: ColorButtonProps) => {
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <TouchableOpacity
      onPress={() => onClick(data.color)}
      style={{...styles.colorButton, backgroundColor: data.value}}>
      {selected ? <Icon name="check" size={20} color="#fff" /> : null}
    </TouchableOpacity>
  );
};
export default function SettingsScreen({navigation}: SettingsProps) {
  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const renderColorButtons = () => {
    let buttons = colorPatterns.map(item => {
      return (
        <ColorButton
          data={item}
          key={item.color}
          selected={colorPattern === item.color}
          onClick={setColorPattern}
        />
      );
    });
    return buttons;
  };
  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        showBackButton={true}
        showSettingsButton={false}
      />
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.switchContainer}>
            <View style={styles.switchLabelContainer}>
              <Text style={styles.labelText}>Toggle Dark Mode</Text>
            </View>
            <Switch
              value={isDarkTheme}
              onChange={() => {
                setIsDarkTheme(prev => !prev);
              }}
            />
          </View>
          <View style={styles.colorPalletContainer}>
            <Text style={styles.labelText}>Select Color Pattern</Text>
            <View style={styles.colorButtonContainer}>
              {renderColorButtons()}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
