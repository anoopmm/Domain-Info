import React, {useMemo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import Share from 'react-native-share';
import * as RNFS from '@dr.pogodin/react-native-fs';
import makeStyles from './domainDetails.style';
import useGetTitleAndDescription from '../../hooks/useGetTitleAndDescription';
import useGetWebsiteThumbnail from '../../hooks/useGetWebsiteThumbnail';
import useCMSDetection from '../../hooks/useCMSDetection';
import useGetDomainExpiration from '../../hooks/useGetDomainExpiration';
import useGetServerLocation from '../../hooks/useGetServerLocation';
import ImageWithLoading from '../../components/Image/image';
import Header from '../../components/Header/header';
import TitleDescription from '../../components/TitleAndDescription/titleAndDescription';
import FloatingButton from '../../components/FloatingButton/floatingButton';
type DetailsScreenProps = {
  route: RouteProp<StackParamList, 'DomainDetails'>;
  navigation: StackNavigationProp<StackParamList, 'DomainDetails'>;
};
type StackParamList = {
  DomainDetails: {url: string};
};
export default function DetailsScreen({route, navigation}: DetailsScreenProps) {
  const {url} = route.params;
  const [thumbnail, lodaingImage] = useGetWebsiteThumbnail(url);
  const [title, desc, loadingSiteTitleAndDesc] = useGetTitleAndDescription(url);
  const [cms, isCMSLoading] = useCMSDetection(url);
  const [domainExp, isDomainExpLoading] = useGetDomainExpiration(url);
  const [location, isLocationLoading] = useGetServerLocation(url);
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const shareContent = async () => {
    let imageUrl = thumbnail;
    const localFilePath = `${RNFS.DocumentDirectoryPath}/image.jpg`;
    try {
      await RNFS.downloadFile({fromUrl: imageUrl, toFile: localFilePath})
        .promise;

      const base64Image = await RNFS.readFile(localFilePath, 'base64');
      const base64Data = `data:image/jpeg;base64,${base64Image}`;
      const shareOptions = {
        title: 'Share via',
        // message: `*${url}*\n*${title}*\n${desc}\n*Expires on:*\n*CMS:*\n*Location:*`,
        message: `*${url}*\n*${title}*\n${desc}\n*Expires on:${domainExp}*\n*CMS:${cms}*\n*Location:${
          location.region + ', ' + location.country
        }*\n`,
        url: base64Data, // Base64 image data
        subject: 'Domain Deatails of ' + url, // For email
      };
      await Share.open(shareOptions);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <FloatingButton onPress={shareContent} />
      <Header navigation={navigation} showBackButton={true} />
      <ScrollView>
        <View style={styles.detailsContainer}>
          <ImageWithLoading
            source={{
              uri: thumbnail,
            }}
            loading={lodaingImage}
            loadingSize="large"
          />
          <View style={styles.domainView}>
            <Text style={styles.domainText}>{url}</Text>
          </View>
          <TitleDescription
            title={title}
            description={desc}
            loading={loadingSiteTitleAndDesc}
            loaderConfig={{titleRows: 2, descRows: 3}}
          />
          <View style={styles.rowstyle}>
            <View style={styles.coloumnStyle}>
              <TitleDescription
                title="CMS"
                description={cms}
                loading={isCMSLoading}
                loaderConfig={{titleRows: 1, descRows: 1}}
              />
            </View>
            <View style={styles.coloumnStyle}>
              <TitleDescription
                title="Location"
                description={location.region + ', ' + location.country}
                loaderConfig={{titleRows: 1, descRows: 1}}
                loading={isLocationLoading}
              />
            </View>
          </View>
          <View style={styles.rowstyle}>
            <View style={styles.coloumnStyle}>
              <TitleDescription
                title="Expiry"
                description={domainExp}
                loading={isDomainExpLoading}
                loaderConfig={{titleRows: 1, descRows: 1}}
              />
            </View>
            <View style={styles.coloumnStyle} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
