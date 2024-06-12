import {useEffect, useState} from 'react';
type LocationDetails = {
  country: string;
  region: string;
};
const useGetServerLocation = (url: string): [LocationDetails, boolean] => {
  const [serverLocation, setServerLocation] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getServerLocation = async () => {
      setLoading(true);
      try {
        console.log('data', url);
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=at_wl8vImvvBDi9Ql1OW0H5C4wNiuNm9&domain=` +
            url,
        );
        const data = await response.json();
        console.log('data', data);
        setServerLocation(data?.location || {});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching server location:', error);
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
