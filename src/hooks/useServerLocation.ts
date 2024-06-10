import {useEffect, useState} from 'react';

const useServerLocation = (url: string): [object, boolean] => {
  const [serverLocation, setServerLocation] = useState<object>({});
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getServerLocation = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://geo.ipify.org/api/v2/country?apiKey=at_wl8vImvvBDi9Ql1OW0H5C4wNiuNm9&domain=muhsin-k.github.io`,
        );
        const data = await response.json();
        setServerLocation(data?.location || {});
        setLoading(false);
      } catch (error) {
        console.error('Error fetching server location:', error);
        setServerLocation({});
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

export default useServerLocation;
