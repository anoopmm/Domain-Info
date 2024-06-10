import {useEffect, useState} from 'react';

const useDomainExpiration = (url: string): [string, boolean] => {
  const [expirationDate, setExpirationDate] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getDomainExpiration = async () => {
      setLoading(true);
      try {
        var myHeaders = new Headers();
        myHeaders.append('apikey', 'jXimCP1gYgjk1tEzYPSNgaflxzdTzVQv');

        var requestOptions = {
          method: 'GET',

          headers: myHeaders,
        };
        const response = await fetch(
          'https://api.apilayer.com/whois/query?domain=poptin.com',
          requestOptions,
        );
        const data = await response.json();
        setExpirationDate(data?.result?.expiration_date || 'Unknown');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching domain expiration:', error);
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

export default useDomainExpiration;
