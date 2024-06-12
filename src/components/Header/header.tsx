// CustomHeader.tsx
import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppContext} from '../../theme/appContext';
import styles from './header.styles';
type Props = {
  navigation: StackNavigationProp<any>;
  showBackButton?: boolean;
  showSettingsButton?: boolean;
};

const CustomHeader: React.FC<Props> = ({
  navigation,
  showBackButton = true,
  showSettingsButton = true,
}) => {
  const {isDarkTheme} = useContext(AppContext);
  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <View>
        {showBackButton && (
          <TouchableOpacity
            onPress={handleBackPress}
            hitSlop={{top: 20, bottom: 20, left: 30, right: 30}}>
            <Icon
              name="chevron-left"
              size={26}
              color={isDarkTheme ? '#fff' : '#6e6e6e'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View>
        {showSettingsButton && (
          <TouchableOpacity
            onPress={handleSettingsPress}
            hitSlop={{top: 20, bottom: 20, left: 30, right: 30}}>
            <Icon
              name="cog"
              size={26}
              color={isDarkTheme ? '#fff' : '#6e6e6e'}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
