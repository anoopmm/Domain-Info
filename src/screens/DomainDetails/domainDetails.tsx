import React from 'react';
import {View, Text, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from './domainDetails.style';
import useTitleAndDescription from '../../hooks/useTitleAndDescription';
import useWebsiteThumbnail from '../../hooks/useWebsiteThumbnail';
import useCMSDetection from '../../hooks/useCMSDetection';
import useDomainExpiration from '../../hooks/useDomainExpiration';
import useServerLocation from '../../hooks/useServerLocation';
import ImageWithLoading from '../../components/Image/image';
import TitleDescription from '../../components/TitleAndDescription/titleAndDescription';
type DetailsScreenProps = {
  route: RouteProp<StackParamList, 'Details'>;
  navigation: StackNavigationProp<StackParamList, 'Details'>;
};
type StackParamList = {
  Details: {url: string};
  // other screens if any
};
export default function DetailsScreen({route}: DetailsScreenProps) {
  const {url} = route.params;
  // const expirationDate = useDomainExpiration(url);
  const [thumbnail, lodaingImage] = useWebsiteThumbnail(url);
  console.log('thumbnail', thumbnail);
  const [title, desc, loadingSiteTitleAndDesc] = useTitleAndDescription(url);
  const [cms, isCMSLoading] = useCMSDetection(url);
  const [domainExp, isDomainExpLoading] = useDomainExpiration(url);
  const [location, isLocationLoading] = useServerLocation(url);

  return (
    <View style={styles.container}>
      <ImageWithLoading
        source={{
          uri: thumbnail,
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
            description={location.country + ', ' + location.region}
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
  );
}
