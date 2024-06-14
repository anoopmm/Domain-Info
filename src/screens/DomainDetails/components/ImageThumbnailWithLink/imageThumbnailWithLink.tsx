import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleProp,
  ImageStyle,
  ViewStyle,
  Text,
  Linking,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import makeStyles from './imageThumbnailWithLink.styles';
import ImageWithLoading from '../../../../components/Image/image';

interface ImageThumbnailWithLinkProps {
  imageUrl: string;
  linkUrl: string;
  loading?: boolean;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const ImageThumbnailWithLink: React.FC<ImageThumbnailWithLinkProps> = ({
  imageUrl,
  linkUrl,
  imageStyle,
  containerStyle,
  loading,
}) => {
  const {colors} = useTheme();
  const styles = makeStyles(colors);

  const handlePress = () => {
    Linking.openURL(linkUrl).catch(err =>
      console.error('Failed to open URL:', err),
    );
  };

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={handlePress}>
      <ImageWithLoading
        style={[styles.image, imageStyle]}
        source={{
          uri: imageUrl,
        }}
        loading={loading}
      />
      <View style={styles.textContainer}>
        <Text style={styles.visitText}>Visit Website</Text>
        <Text style={styles.linkText}>{linkUrl}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageThumbnailWithLink;
