import {useEffect, useState} from 'react';

const useGetTitleAndDescription = (url: string): [string, string, boolean] => {
  const [title, setTitle] = useState<string>('Unknown');
  const [loading, setLoading] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('Unknown');

  useEffect(() => {
    const getTitleAndDescription = async () => {
      setLoading(true);
      try {
        const response = await fetch('http://' + url);
        const html = await response.text();

        // Extract title from HTML
        const titleMatch = html.match(/<title>(.*?)<\/title>/i);
        if (titleMatch && titleMatch.length > 1) {
          setTitle(titleMatch[1]);
        }

        // Extract description from HTML meta tags
        const descriptionMatch = html.match(
          /<meta.*?name="description".*?content="(.*?)"/i,
        );
        if (descriptionMatch && descriptionMatch.length > 1) {
          setDescription(descriptionMatch[1]);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching title and description:', error);
        setTitle('Unknown');
        setDescription('Unknown');
        setLoading(false);
      }
    };

    getTitleAndDescription();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return [title, description, loading];
};

export default useGetTitleAndDescription;
