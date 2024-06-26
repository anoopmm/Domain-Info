import {useEffect, useState} from 'react';
type LocationDetails = {
  country: string;
  region: string;
};
import keys from '../constants/apiKeys';
const useGetServerLocation = (url: string): [LocationDetails, boolean] => {
  const [serverLocation, setServerLocation] = useState<LocationDetails>({
    country: 'Unknown',
    region: 'Unknown',
  });
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getServerLocation = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=${keys.ipify}&domain=${url}`,
        );
        const data = await response.json();
        setServerLocation(
          data?.location || {country: 'Unknown', region: 'Unknown'},
        );
        setLoading(false);
      } catch (error) {
        setServerLocation({country: 'Unknown', region: 'Unknown'});
        setLoading(false);
      }
    };

    getServerLocation();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [serverLocation, loading];
};

export default useGetServerLocation;
