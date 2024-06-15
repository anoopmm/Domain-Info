import React, {useMemo, useState} from 'react';
import {View, ScrollView, Text, ToastAndroid} from 'react-native';
import {RouteProp, useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Share from 'react-native-share';
import makeStyles from './domainDetails.style';
import domainDataHooks from '../../hooks';
import ImageWithLoading from '../../components/Image/image';
import Header from '../../components/Header/header';
import LabelValuePair from '../../components/LabelValuePair/labelValuePair';
import FloatingButton from '../../components/FloatingButton/floatingButton';
import TitleAndDescription from './components/TitleAndDescription/titleAndDescription';
import ImageThumbnailWithLink from './components/ImageThumbnailWithLink/imageThumbnailWithLink';
import {convertImageToBase64} from '../../helpers';
import {RootStackParamList} from '../../navigation/homeStack';

type StackParamList = {
  DomainDetails: {url: string};
};

type DetailsScreenProps = {
  route: RouteProp<StackParamList, 'DomainDetails'>;
  navigation: StackNavigationProp<RootStackParamList, 'DomainDetails'>;
};

const DetailsScreen: React.FC<DetailsScreenProps> = ({route, navigation}) => {
  const {url} = route.params;
  const [thumbnail, isThumbnailImageLoading] =
    domainDataHooks.useGetWebsiteThumbnail(url);
  const [title, desc, isTitleAndDescLoading] =
    domainDataHooks.useGetTitleAndDescription(url);
  const [cms, isCMSLoading] = domainDataHooks.useCMSDetection(url);
  const [domainExp, isDomainExpLoading] =
    domainDataHooks.useGetDomainExpiration(url);
  const [location, isLocationLoading] =
    domainDataHooks.useGetServerLocation(url);
  const [isShareButtonDisabled, setShareButtonDisableState] =
    useState<boolean>(false);
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  /**
   * Shares the content via the native share dialog.
   * Converts the thumbnail image to base64 and constructs the share options.
   */
  const shareContent = async () => {
    //Disabling share button for multiple press
    setShareButtonDisableState(true);
    try {
      const base64Data = await convertImageToBase64(thumbnail);
      if (base64Data) {
        const shareOptions = {
          title: 'Share via',
          message: `*${url}*\n*${title}*\n${desc}\n*Expires on:${domainExp}*\n*CMS:${cms}*\n*Location:${location.region}, ${location.country}*\n`,
          url: base64Data, // Base64 image data
          subject: `Domain Details of ${url}`,
        };

        await Share.open(shareOptions);
        setShareButtonDisableState(false);
      } else {
        setShareButtonDisableState(false);
        ToastAndroid.show(
          'An error occurred while sharing content.!',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      setShareButtonDisableState(false);
      console.error('Error sharing content:', error);
      ToastAndroid.show(
        'An error occurred while sharing content.!',
        ToastAndroid.SHORT,
      );
    }
  };

  return (
    <View style={styles.container}>
      <FloatingButton
        icon="share"
        onPress={shareContent}
        disabled={isShareButtonDisabled}
      />
      <Header
        navigation={navigation}
        showRightButton
        showLeftButton
        title="Domain Details"
        rightAction={() => navigation.navigate('Settings')}
      />
      <ScrollView style={styles.scrollContainer}>
        <ImageWithLoading
          source={{uri: thumbnail}}
          loading={isThumbnailImageLoading}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.domainName}>{url}</Text>
          <TitleAndDescription
            title={title}
            desc={desc}
            loading={isTitleAndDescLoading}
          />
          <ImageThumbnailWithLink
            imageUrl={thumbnail}
            linkUrl={url}
            loading={isThumbnailImageLoading}
          />
          <LabelValuePair label="CMS" value={cms} loading={isCMSLoading} />
          <LabelValuePair
            label="Location"
            value={`${location.region}, ${location.country}`}
            loading={isLocationLoading}
          />
          <LabelValuePair
            label="Expiry"
            value={domainExp}
            loading={isDomainExpLoading}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
