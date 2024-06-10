import React, {useState} from 'react';
import {View, Text, Button, Alert, TextInput} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../router';
import styles from './home.styles';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({navigation}: Props) {
  const [url, setUrl] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');
  const handleSubmit = () => {
    const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // fragment locator

    if (urlPattern.test(url)) {
      setValidationMessage('');
      navigation.navigate('DomainDetails', {url});
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
