import {useEffect, useState} from 'react';

const useWebsiteThumbnail = (url: string): [string, boolean] => {
  const [cms, setCMS] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWebsiteThumbnail = async () => {
      try {
        const apiKey = 'GTZ4YM6-V234TXZ-G0W761A-T4PJ0JB'; // Replace with your API key
        const apiUrl =
          'https://whatcms.org/API/Tech?key=w3889ag43xknyknh6bujk0nz0mo5ouxbiohgo7wvtv9insmay7ocab2k30pffdr7jrpfl2&url=' +
          url;
        // const apiUrl = `https://api.screenshotapi.io/capture?url=${encodeURIComponent(
        //   url,
        // )}&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        console.log('response', response);
        const data = await response.json();
        console.log('response', JSON.stringify(data));

        if (data && data.results) {
          let cms = '';
          data.results.forEach((element: any) => {
            if (element.categories.indexOf('CMS') > -1) {
              cms = element.name;
              return;
            }
          });
          setCMS(cms);
        }
      } catch (error) {
        console.error('Error getting website thumbnail:', error);
        setCMS('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebsiteThumbnail();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [cms, isLoading];
};

export default useWebsiteThumbnail;
