import * as React from 'react';
import { Alert, AsyncStorage, Image, Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { ScrollView, State } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../../../components/StyledText';
import { styles } from './styles'
import api from '../../services/api'

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.centralizedContentContainer}>
          <Image
            style={{width: 168, height: 84}}
            source={{uri: 'https://i.imgur.com/kHaI6rs.png'}}
           />
       
	  <TextInput style={styles.inputWithBorder}
          placeholder="Login" 
          onChangeText={this.handleLoginChange}
          />
          <TextInput style={styles.inputWithBorder}
          placeholder="Password" secureTextEntry={true}
          onChangeText={this.handlePasswordChange}
          />
        <Button
          title="Sign In"
          onPress={this.hangleSignInPress}
        />
        </ScrollView>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}></View>
      </View>
    );
  }

  static navigationOptions = {
    header: null,
  };

  state = { login: '', password: '', error: '' };

  handleLoginChange = (login) => {
    this.setState({ login });
  };
  
  handlePasswordChange = (password) => {
    this.setState({ password });
  };
  
  hangleSignInPress = async () => {
    try{
      const response = await api.post('/api/token/', {
        username: this.state.login,
        password: this.state.password,
      });
      await AsyncStorage.setItem('token', response.data.access);
      Alert.alert('Logged with success');
    }
    catch(error){
      if (error.response.status === 401){
        Alert.alert('Login or password is incorrect'); 
      } 
      else {
        console.debug(error.response)
      }
    }
  }
}
