import React, {useState, useMemo} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/homeStack';
import makeStyles from './home.styles';
import {extractDomainFromURL} from '../../helpers';
import Header from '../../components/Header/header';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [url, setUrl] = useState<string>('');
  const [validationMessage, setValidationMessage] = useState<string>('');
  const {colors} = useTheme();
  const styles = useMemo(() => makeStyles(colors), [colors]);

  const handleSubmit = () => {
    const domain = extractDomainFromURL(url);
    if (domain) {
      navigation.navigate('DomainDetails', {url: domain});
    } else {
      setValidationMessage('Invalid URL');
    }
  };

  const handleTextChange = (text: string) => {
    setValidationMessage('');
    setUrl(text);
  };

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        showRightButton
        rightAction={() => {
          navigation.navigate('Settings');
        }}
      />
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
          placeholderTextColor={colors.textSecondary}
        />
        {validationMessage && (
          <Text style={styles.validationMessage}>{validationMessage}</Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
