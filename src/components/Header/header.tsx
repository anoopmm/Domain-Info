// CustomHeader.tsx
import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppContext} from '../../theme/appContext';
import styles from './header.styles';
type Props = {
  navigation: StackNavigationProp<any>;
  showBackButton?: boolean;
};

const CustomHeader: React.FC<Props> = ({navigation, showBackButton = true}) => {
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSettingsPress = () => {
    // Navigate to settings screen or show settings modal
    // Example:
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View>
        {showBackButton && (
          <TouchableOpacity onPress={handleBackPress}>
            <Icon
              name="chevron-left"
              size={26}
              color={isDarkTheme ? '#fff' : '#6e6e6e'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={handleSettingsPress}>
          <Icon name="cog" size={26} color={isDarkTheme ? '#fff' : '#6e6e6e'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
