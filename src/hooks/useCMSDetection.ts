import {useEffect, useState} from 'react';
import keys from '../constants/apiKeys';

const useFetchCMS = (url: string): [string, boolean] => {
  const [cms, setCMS] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const apiUrl = `https://whatcms.org/API/Tech?key=${keys.whatcms}&url=${url}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.results) {
          let cmsValue = 'Unknown';
          data.results.forEach((element: any) => {
            if (element.categories.indexOf('CMS') > -1) {
              cmsValue = element.name;
              return;
            }
          });
          setCMS(cmsValue);
        }
      } catch (error) {
        setCMS('Unknown');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCMS();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [cms, isLoading];
};

export default useFetchCMS;
