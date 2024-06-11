import {useEffect, useState} from 'react';

const useWebsiteThumbnail = (url: string): [string, boolean] => {
  const [thumbnail, setThumbnail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchWebsiteThumbnail = async () => {
      try {
        const apiKey = 'GTZ4YM6-V234TXZ-G0W761A-T4PJ0JB'; // Replace with your API key
        const apiUrl =
          'https://shot.screenshotapi.net/screenshot?token=GTZ4YM6-V234TXZ-G0W761A-T4PJ0JB&url=' +
          url;
        // const apiUrl = `https://api.screenshotapi.io/capture?url=${encodeURIComponent(
        //   url,
        // )}&apiKey=${apiKey}`;

        const response = await fetch(apiUrl);
        console.log('response', response);
        const data = await response.json();
        console.log('response', data);

        if (data && data.screenshot) {
          setThumbnail(data.screenshot);
        }
      } catch (error) {
        console.error('Error getting website thumbnail:', error);
        setThumbnail('');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebsiteThumbnail();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [thumbnail, isLoading];
};

export default useWebsiteThumbnail;
