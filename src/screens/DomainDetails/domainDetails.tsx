import React from 'react';
import {View, Text, Image} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import useTitleAndDescription from '../../hooks/useTitleAndDescription';
import useWebsiteThumbnail from '../../hooks/useWebsiteThumbnail';
import useCMSDetection from '../../hooks/useCMSDetection';
import useDomainExpiration from '../../hooks/useDomainExpiration';
import useServerLocation from '../../hooks/useServerLocation';
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
  const expirationDate = useDomainExpiration(url);
  const [thumbnail, lodaingImage] = useWebsiteThumbnail(url);
  console.log('thumbnail', thumbnail);
  const [title, des, lodaing] = useTitleAndDescription(url);
  const [cms, isLoading] = useCMSDetection(url);
  const [domainex, isLoading2] = useDomainExpiration(url);
  const [loacation, isLoading3] = useServerLocation(url);

  return (
    <View>
      <Text>{url}</Text>
      {lodaing ? (
        <Text>Loading</Text>
      ) : (
        <View>
          <Text>{title}</Text>
          <Text>{des}</Text>
        </View>
      )}
      {!lodaingImage ? (
        <Image source={{uri: thumbnail}} width={300} height={200} />
      ) : (
        <Text>Loading2</Text>
      )}
      {!isLoading ? <Text>{cms}</Text> : null}
      {!isLoading2 ? <Text>{domainex}</Text> : <Text>Loading expiry</Text>}
      {!isLoading3 ? (
        <Text>
          {loacation.country}, {loacation.region}
        </Text>
      ) : (
        <Text>Loading expiry</Text>
      )}
    </View>
  );
}
