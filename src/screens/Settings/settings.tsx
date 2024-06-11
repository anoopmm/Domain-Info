import React, {useContext, useMemo} from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../router';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
import makeStyles from './settings.styles';
import Header from '../../components/Header/header';
import {TouchableOpacity} from 'react-native-gesture-handler';
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Settings'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const ColorButton = ({data, selected, onClick}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick(data.color)}
      style={{
        width: 40,
        height: 40,
        backgroundColor: data.value,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
      }}>
      {selected ? <Icon name="check" size={20} color="#fff" /> : null}
    </TouchableOpacity>
  );
};
export default function SettingsScreen({navigation}: Props) {
  const availableColors = [
    {color: 'purple', value: '#9333ea'},
    {color: 'indigo', value: '#6366f1'},
    {color: 'teal', value: '#14b8a6'},
    {color: 'red', value: '#ef4444'},
  ];

  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  console.log(colorPattern, colors[colorPattern]);
  const styles = useMemo(
    () => makeStyles(colors[colorPattern]),
    [colors[colorPattern]],
  );
  const renderColorButtons = () => {
    let buttons = availableColors.map(item => {
      return (
        <ColorButton
          data={item}
          key={item.color}
          selected={colorPattern == item.color}
          onClick={setColorPattern}
        />
      );
    });
    return buttons;
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} showBackButton={true} />
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.switchContainer}>
            <View style={{justifyContent: 'center'}}>
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
            <View style={{flexDirection: 'row'}}>{renderColorButtons()}</View>
          </View>
        </View>
      </View>
    </View>
  );
}
