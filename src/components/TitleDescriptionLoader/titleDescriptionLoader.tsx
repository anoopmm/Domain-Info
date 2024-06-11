import React, {useEffect, useRef, useContext, useMemo} from 'react';
import {Animated, ViewStyle, StyleProp, View} from 'react-native';
import makeStyles from './titleDescriptionLoader.style';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
interface PulsatingViewProps {
  style?: StyleProp<ViewStyle>;
  titleRows?: number;
  descRows?: number;
}

const TitleDescriptionLoader: React.FC<PulsatingViewProps> = ({
  style,
  titleRows,
  descRows,
}) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  console.log(colorPattern, colors[colorPattern]);
  const styles = useMemo(
    () => makeStyles(colors[colorPattern]),
    [colors[colorPattern]],
  );
  useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1.1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 0.5,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(opacityAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
        ]),
      ]),
    );
    pulse.start();
    return () => pulse.stop();
  }, [scaleAnim, opacityAnim]);
  const loadTitleRows = () => {
    let rows = [];
    if (titleRows) {
      for (let i = 0; i < titleRows; i++) {
        rows.push(<View style={styles.title} />);
      }
      return rows;
    } else {
      return <View style={styles.title} />;
    }
  };
  const loadDecRows = () => {
    let rows = [];
    if (descRows) {
      for (let i = 0; i < descRows; i++) {
        rows.push(<View style={styles.description} />);
      }
      return rows;
    } else {
      return <View style={styles.description} />;
    }
  };
  return (
    <Animated.View
      style={[
        styles.pulsating,
        {
          transform: [{scale: scaleAnim}],
          opacity: opacityAnim,
        },
        style,
      ]}>
      {loadTitleRows()}
      {loadDecRows()}
    </Animated.View>
  );
};

export default TitleDescriptionLoader;
