import React, {useContext, useMemo} from 'react';
import {View, Text, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import makeStyles from './domainDetails.style';
import useGetTitleAndDescription from '../../hooks/useGetTitleAndDescription';
import useGetWebsiteThumbnail from '../../hooks/useGetWebsiteThumbnail';
import useCMSDetection from '../../hooks/useCMSDetection';
import useGetDomainExpiration from '../../hooks/useGetDomainExpiration';
import useGetServerLocation from '../../hooks/useGetServerLocation';
import ImageWithLoading from '../../components/Image/image';
import Header from '../../components/Header/header';
import TitleDescription from '../../components/TitleAndDescription/titleAndDescription';
import {AppContext} from '../../theme/appContext';
import {useTheme} from '@react-navigation/native';
import Share from 'react-native-share';
import * as RNFS from '@dr.pogodin/react-native-fs';
import FloatingButton from '../../components/FloatingButton/floatingButton';
type DetailsScreenProps = {
  route: RouteProp<StackParamList, 'Details'>;
  navigation: StackNavigationProp<StackParamList, 'Details'>;
};
type StackParamList = {
  Details: {url: string};
  // other screens if any
};
export default function DetailsScreen({route, navigation}: DetailsScreenProps) {
  const {url} = route.params;
  const [thumbnail, lodaingImage] = useGetWebsiteThumbnail(url);
  const [title, desc, loadingSiteTitleAndDesc] = useGetTitleAndDescription(url);
  const [cms, isCMSLoading] = useCMSDetection(url);
  const [domainExp, isDomainExpLoading] = useGetDomainExpiration(url);
  const [location, isLocationLoading] = useGetServerLocation(url);
  const {colors} = useTheme();
  const {isDarkTheme, setIsDarkTheme, setColorPattern, colorPattern} =
    useContext(AppContext);
  console.log(colorPattern, colors[colorPattern]);
  const styles = useMemo(
    () => makeStyles(colors[colorPattern]),
    [colors[colorPattern]],
  );
  const shareContent = async () => {
    let imageUrl = thumbnail;
    // let imageUrl =
    //   'https://fastly.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ';
    const localFilePath = `${RNFS.DocumentDirectoryPath}/image.jpg`;
    try {
      // Download the image to the local file system
      await RNFS.downloadFile({fromUrl: imageUrl, toFile: localFilePath})
        .promise;

      // Read the downloaded image as a base64 string
      const base64Image = await RNFS.readFile(localFilePath, 'base64');
      const base64Data = `data:image/jpeg;base64,${base64Image}`;

      // Define share options
      const shareOptions = {
        title: 'Share via',
        // message: `*${url}*\n*${title}*\n${desc}\n*Expires on:*\n*CMS:*\n*Location:*`,
        message: `*${url}*\n*${title}*\n${desc}\n*Expires on:${domainExp}*\n*CMS:${cms}*\n*Location:${location.country}*\n`,
        url: base64Data, // Base64 image data
        subject: 'Domain Deatails of ' + url, // For email
      };

      // Open share dialog
      await Share.open(shareOptions);
    } catch (error) {
      console.log('Error =>', error);
    }
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} showBackButton={true} />
      <View style={styles.container}>
        <ImageWithLoading
          source={{
            uri: thumbnail,
            // uri: 'https://fastly.picsum.photos/id/340/200/300.jpg?hmac=JIWzQMzudGQJ5ZI2GIRg4NTwRI4fwA8k8xcnMvEmwcQ',
          }}
          // style={styles.image}
          loading={lodaingImage}
          loadingSize="large"
          loadingColor="#00ff00" // Green color
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
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TitleDescription
              title="CMS"
              description={cms}
              loading={isCMSLoading}
              loaderConfig={{titleRows: 1, descRows: 1}}
            />
          </View>
          <View style={{flex: 1}}>
            <TitleDescription
              title="Location"
              description={location.region + ', ' + location.country}
              loaderConfig={{titleRows: 1, descRows: 1}}
              loading={isLocationLoading}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <TitleDescription
              title="Expiry"
              description={domainExp}
              loading={isDomainExpLoading}
              loaderConfig={{titleRows: 1, descRows: 1}}
            />
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
      <FloatingButton onPress={shareContent} />
    </View>
  );
}
