import React, {useState} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './image.style';
interface ImageWithLoadingProps {
  source: {uri: string} | number;
  style?: StyleProp<ImageStyle>;
  loadingSize?: 'small' | 'large' | number;
  loadingColor?: string;
  loading: boolean;
}

const ImageWithLoading: React.FC<ImageWithLoadingProps> = ({
  source,
  style,
  loadingSize = 'large',
  loading,
}) => {
  const [imageLoading, setLoading] = useState(true);
  const {colors} = useTheme();
  return (
    <View style={[styles.container, style]}>
      {(loading || imageLoading) && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator
            style={styles.loading}
            size={loadingSize}
            color={colors.primary}
          />
        </View>
      )}
      <Image
        source={source}
        style={[styles.image, loading && ({display: 'none'} as ImageStyle)]}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};

export default ImageWithLoading;
