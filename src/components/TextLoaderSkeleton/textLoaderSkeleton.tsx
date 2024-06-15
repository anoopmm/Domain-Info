import React, {useEffect, useRef, useMemo} from 'react';
import {Animated, ViewStyle, StyleProp} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './textLoaderSkeleton.style';

interface PulsatingViewProps {
  style?: StyleProp<ViewStyle>;
  titleRows?: number;
  descRows?: number;
}

const TextLoaderSkeleton: React.FC<PulsatingViewProps> = ({style}) => {
  // Animation values for scaling and opacity
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0.3)).current;

  // Fetching colors from the theme
  const {colors} = useTheme();

  // Memoizing the styles to avoid recalculating on each render
  const styles = useMemo(() => makeStyles(colors), [colors]);

  useEffect(() => {
    // Defining the pulsating animation
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1.05,
            duration: 900,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.1,
            duration: 900,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 900,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.3,
            duration: 900,
            useNativeDriver: true,
          }),
        ]),
      ]),
    );
    pulseAnimation.start();
    return () => {
      pulseAnimation.stop();
    };
  }, [scaleAnim, opacityAnim]);

  return (
    <Animated.View
      style={[
        styles.pulsating,
        {
          transform: [{scale: scaleAnim}],
          opacity: opacityAnim,
        },
        style,
      ]}
    />
  );
};

export default TextLoaderSkeleton;
