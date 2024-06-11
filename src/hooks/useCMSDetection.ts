import {useEffect, useState} from 'react';

const useFetchCMS = (url: string): [string, boolean] => {
  const [cms, setCMS] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCMS = async () => {
      try {
        const apiKey =
          'w3889ag43xknyknh6bujk0nz0mo5ouxbiohgo7wvtv9insmay7ocab2k30pffdr7jrpfl2';
        const apiUrl =
          'https://whatcms.org/API/Tech?key=' + apiKey + '&url=' + url;
        const response = await fetch(apiUrl);
        console.log('response', response);
        const data = await response.json();
        console.log('response', JSON.stringify(data));

        if (data && data.results) {
          let cmsValue = '';
          data.results.forEach((element: any) => {
            if (element.categories.indexOf('CMS') > -1) {
              cmsValue = element.name;
              return;
            }
          });
          setCMS(cmsValue);
        }
      } catch (error) {
        console.error('Error getting website thumbnail:', error);
        setCMS('');
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
