// CustomHeader.tsx
import React, {useMemo} from 'react';
import {View, Text, TouchableOpacity, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import makeStyles from './header.styles';

interface CustomHeaderProps {
  navigation: StackNavigationProp<any>;
  leftAction?: () => void;
  rightAction?: () => void;
  showLeftButton?: boolean;
  showRightButton?: boolean;
  title?: string;
  headerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  leftIcon?: string;
  rightIcon?: true extends CustomHeaderProps['showRightButton']
    ? string
    : never;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  navigation,
  leftAction,
  rightAction = () => {},
  showLeftButton = false,
  showRightButton = false,
  title,
  headerStyle,
  titleStyle,
  leftIcon = 'angle-left',
  rightIcon = 'cog',
}) => {
  const {colors} = useTheme();

  // Memoizing the styles to avoid recalculating on each render
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const handleLeftPress = () => {
    if (leftAction) {
      leftAction();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={[styles.headerStyle, headerStyle]}>
      <View>
        {showLeftButton && (
          <TouchableOpacity
            onPress={handleLeftPress}
            hitSlop={{top: 20, bottom: 20, left: 30, right: 30}}>
            <Icon name={leftIcon} size={30} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.titleContainer}>
        {title && (
          <Text style={[styles.title, titleStyle]} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>
      <View>
        {showRightButton && (
          <TouchableOpacity
            onPress={rightAction}
            hitSlop={{top: 20, bottom: 20, left: 30, right: 30}}>
            <Icon name={rightIcon} size={26} color={colors.textPrimary} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomHeader;
