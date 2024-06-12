import {useEffect, useState} from 'react';
import keys from '../constants/apiKeys';

const useGetDomainExpiration = (url: string): [string, boolean] => {
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getDomainExpiration = async () => {
      setLoading(true);
      try {
        var myHeaders = new Headers();
        myHeaders.append('apikey', keys.apilayer);

        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };
        const response = await fetch(
          `https://api.apilayer.com/whois/query?domain=${url}`,
          requestOptions,
        );
        const data = await response.json();
        setExpirationDate(data?.result?.expiration_date || 'Unknown');
        setLoading(false);
      } catch (error) {
        setExpirationDate('Unknown');
        setLoading(false);
      }
    };

    getDomainExpiration();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [expirationDate, loading];
};

export default useGetDomainExpiration;
