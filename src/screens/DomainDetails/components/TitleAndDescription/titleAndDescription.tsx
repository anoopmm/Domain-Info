import React from 'react';
import {View, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './titleAndDescription.styles';
import TextLoaderSkeleton from '../../../../components/TextLoaderSkeleton/textLoaderSkeleton';

interface TitleAndDescriptionProps {
  title: string;
  desc: string;
  loading: boolean;
  titleStyle?: StyleProp<TextStyle>;
  descStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const TitleAndDescription: React.FC<TitleAndDescriptionProps> = ({
  title,
  desc,
  titleStyle,
  descStyle,
  containerStyle,
  loading,
}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  return (
    <View style={[styles.container, containerStyle]}>
      {!loading ? (
        <>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <Text style={[styles.desc, descStyle]}>{desc}</Text>
        </>
      ) : (
        <>
          <View style={styles.titleLoaderContainer}>
            <TextLoaderSkeleton style={styles.titleLoaderStyle} />
            <TextLoaderSkeleton style={styles.titleLoaderStyle} />
          </View>
          <View style={styles.descLoaderContainer}>
            <TextLoaderSkeleton style={styles.descLoaderStyle} />
            <TextLoaderSkeleton style={styles.descLoaderStyle} />
            <TextLoaderSkeleton style={styles.descLoaderStyle} />
          </View>
        </>
      )}
    </View>
  );
};

export default TitleAndDescription;
