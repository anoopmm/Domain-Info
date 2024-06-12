import React, {useState, useMemo} from 'react';
import {View, Text, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../router';
import makeStyles from './home.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';
import Header from '../../components/Header/header';
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({navigation}: Props) {
  const [url, setUrl] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);
  const handleSubmit = () => {
    const urlPattern = new RegExp(
      '^' + // start of string
        '(https?|ftp):\\/\\/' + // protocol (http, https, or ftp)
        '(?:\\S+(?::\\S*)?@)?' + // user:pass authentication (optional)
        '(?:' +
        '(?!10(?:\\.\\d{1,3}){3})' + // non-private IP address
        '(?!127(?:\\.\\d{1,3}){3})' + // loopback address
        '(?!169\\.254(?:\\.\\d{1,3}){2})' + // link-local address
        '(?!192\\.168(?:\\.\\d{1,3}){2})' + // private-use address
        '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' + // private-use address
        '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])\\.' + // IP address (IPv4)
        '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])\\.' +
        '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])\\.' +
        '(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-5])' +
        '|' +
        '(?:' + // domain name
        '(?![-_])(?:[-\\w\\u00a1-\\uffff]{0,62}[a-z0-9\\u00a1-\\uffff])?' +
        '\\.' +
        ')+(?:[-\\w\\u00a1-\\uffff]{1,63}|[a-z0-9\\u00a1-\\uffff]{2,})' +
        ')' +
        '(?::\\d{2,5})?' + // port (optional)
        '(?:[/?#]\\S*)?' + // path and query string (optional)
        '$', // end of string
      'i', // case insensitive
    ); // fragment locator

    if (urlPattern.test(url)) {
      setValidationMessage('');
      const domainPattern =
        /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?]+)/im;
      const matches = url.match(domainPattern);
      let domain = matches && matches[1];
      if (domain) {
        navigation.navigate('DomainDetails', {url: domain});
      } else {
        setValidationMessage('Please enter a valid URL.');
      }
    } else {
      setValidationMessage('Please enter a valid URL.');
    }
  };
  const handleTextChange = (text: string) => {
    if (validationMessage) {
      setValidationMessage('');
    }
    setUrl(text);
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} showBackButton={false} />
      <View style={styles.contentContainer}>
        <Text style={styles.label}>Enter a URL:</Text>
        <TextInput
          style={styles.input}
          placeholder="https://example.com"
          value={url}
          onChangeText={handleTextChange}
          keyboardType="url"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {validationMessage ? (
          <Text style={styles.validationMessage}>{validationMessage}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
