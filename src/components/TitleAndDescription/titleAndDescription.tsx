import React, {useMemo} from 'react';
import {View, Text, ViewStyle, TextStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './titleAndDescription.style';
import TitleDescriptionLoader from '../TitleDescriptionLoader/titleDescriptionLoader';
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
  const styles = useMemo(() => makeStyles(colors), [colors]);
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
