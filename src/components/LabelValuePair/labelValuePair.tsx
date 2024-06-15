import React, {useMemo} from 'react';
import {View, Text, ViewStyle, TextStyle, StyleProp} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './labelValuePair.style';
import TextLoaderSkeleton from '../TextLoaderSkeleton/textLoaderSkeleton';

interface LabelValuePairProps {
  label: string;
  value: string;
  loading?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  loaderStyle?: StyleProp<ViewStyle>;
}

const LabelValuePair: React.FC<LabelValuePairProps> = ({
  label,
  value,
  loading = false,
  labelStyle,
  valueStyle,
  containerStyle,
  loaderStyle,
}) => {
  // Fetch theme colors
  const {colors} = useTheme();

  // Memoize styles to avoid unnecessary recalculations
  const styles = useMemo(() => makeStyles(colors), [colors]);

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.labelContainer}>
        <Text style={[styles.title, labelStyle]}>{label}</Text>
      </View>
      <View style={styles.valueContainer}>
        {loading ? (
          <TextLoaderSkeleton style={loaderStyle} />
        ) : (
          <Text style={[styles.description, valueStyle]}>{value}</Text>
        )}
      </View>
    </View>
  );
};

export default LabelValuePair;
