import React, {useState, useMemo} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './image.style';
interface ImageWithLoadingProps {
  source: {uri: string} | number;
  style?: StyleProp<ImageStyle>;
  loadingSize?: 'small' | 'large' | number;
  loadingColor?: string;
  loading?: boolean;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  source,
  style,
  loadingSize = 'large',
  loading,
}) => {
  const [imageLoading, setLoading] = useState(true);
  const {colors} = useTheme();
  // Memoizing the styles to avoid recalculating on each render
  const styles = useMemo(() => makeStyles(colors), [colors]);
  return (
    <View style={[styles.container, style]}>
      {(imageLoading || loading) && (
        <View style={[styles.loaderContainer, style]}>
          <ActivityIndicator
            style={styles.loading}
            size={loadingSize}
            color={colors.primary}
          />
        </View>
      )}

      {!loading && (
        <Image
          source={source}
          style={[
            styles.image,
            loading && ({display: 'none'} as ImageStyle),
            style,
          ]}
          onLoadEnd={() => setLoading(false)}
        />
      )}
    </View>
  );
};

export default ImageWithLoading;
