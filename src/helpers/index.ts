import * as RNFS from '@dr.pogodin/react-native-fs';

/**
 * Validates a given URL and extracts the domain if the URL is valid.
 *
 * @param url - The URL to validate.
 * @returns The domain of the URL if valid, otherwise null.
 */
export const extractDomainFromURL = (url: string): string | null => {
  // Regular expression pattern to validate URLs
  const urlPattern = new RegExp(
    '^' + // Start of string
      '(https?|ftp):\\/\\/' + // Protocol (http, https, or ftp)
      '(?:\\S+(?::\\S*)?@)?' + // User:pass authentication (optional)
      '(?:' +
      '(?!10(?:\\.\\d{1,3}){3})' + // Non-private IP address
      '(?!127(?:\\.\\d{1,3}){3})' + // Loopback address
      '(?!169\\.254(?:\\.\\d{1,3}){2})' + // Link-local address
      '(?!192\\.168(?:\\.\\d{1,3}){2})' + // Private-use address
      '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' + // Private-use address
      '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])\\.' + // IP address (IPv4)
      '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])\\.' +
      '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])\\.' +
      '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])' +
      '|' +
      '(?:' + // Domain name
      '(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff])?' +
      '\\.' +
      ')+(?:[-\\w\\u00a1-\\uffff]{1,63}|[a-z0-9\\u00a1-\\uffff]{2,})' +
      ')' +
      '(?::\\d{2,5})?' + // Port (optional)
      '(?:[/?#]\\S*)?' + // Path and query string (optional)
      '$', // End of string
    'i', // Case insensitive
  );

  // Test if the URL matches the pattern
  if (urlPattern.test(url)) {
    // Regular expression pattern to extract the domain from the URL
    const domainPattern =
      /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/im;
    const matches = url.match(domainPattern);
    return matches ? matches[1] : null;
  } else {
    return null;
  }
};

/**
 * Converts an image URL to a base64 encoded string.
 *
 * @param {string} imageUrl - The URL of the image to be converted.
 * @returns {Promise<string | null>} - A promise that resolves to a base64 encoded string
 *                                     of the image, or null if an error occurs.
 */
export const convertImageToBase64 = async (
  imageUrl: string,
): Promise<string | null> => {
  const localFilePath = `${RNFS.DocumentDirectoryPath}/image.jpg`;

  try {
    // Download the image from the provided URL and save it locally
    await RNFS.downloadFile({fromUrl: imageUrl, toFile: localFilePath}).promise;

    // Read the saved image file and convert it to a base64 encoded string
    const base64Image = await RNFS.readFile(localFilePath, 'base64');

    const base64Data = `data:image/jpeg;base64,${base64Image}`;

    return base64Data;
  } catch (error) {
    console.error('Error converting image to base64:', error);

    return null;
  }
};
