import React, {useMemo, useContext} from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import makeStyles from './titleAndDescription.style';
import TitleDescriptionLoader from '../TitleDescriptionLoader/titleDescriptionLoader';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
interface TitleDescriptionProps {
  title: string;
  description: string;
  loading?: boolean;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  containerStyle?: ViewStyle;
  loaderConfig: {
    titleRows: number;
    descRows: number;
  };
}

const TitleDescription: React.FC<TitleDescriptionProps> = ({
  title,
  description,
  titleStyle,
  loading,
  descriptionStyle,
  containerStyle,
  loaderConfig,
}) => {
  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  console.log(colorPattern, colors[colorPattern]);
  const styles = useMemo(
    () => makeStyles(colors[colorPattern]),
    [colors[colorPattern]],
  );
  if (!loading) {
    return (
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
        <Text style={[styles.description, descriptionStyle]}>
          {description}
        </Text>
      </View>
    );
  } else {
    return (
      <TitleDescriptionLoader
        titleRows={loaderConfig?.titleRows}
        descRows={loaderConfig?.descRows}
      />
    );
  }
};

export default TitleDescription;
