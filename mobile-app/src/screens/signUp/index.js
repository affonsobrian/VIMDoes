import * as React from 'react';
import { Alert, Image, Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../../../components/StyledText';
import { styles } from './styles'
import api from '../../services/api'

export default class LinksScreen extends React.Component {
    render(){
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.centralizedContentContainer}>
            <TextInput style={styles.inputWithBorder}
            placeholder="Login"
            onChangeText={this.handleLoginChange} 
            />
            <TextInput style={styles.inputWithBorder}
            placeholder="Email"
            onChangeText={this.handleEmailChange} 
            />
            <TextInput style={styles.inputWithBorder}
            placeholder="Password" secureTextEntry={true}
            onChangeText={this.handlePasswordChange} 
            />
            <TextInput style={styles.inputWithBorder}
            placeholder="Repeat password" secureTextEntry={true}
            onChangeText={this.handleRepeatPasswordChange} 
            />
          <Button
            title="Sign Up"
            onPress={this.hangleSignUpPress}
          />
          </ScrollView>
            <View style={[styles.codeHighlightContainer, styles.navigationFilename]}></View>
        </View>
      );
  }

  state = { login: '', email: '', password: '', repeat_password: '', error: '' };

  handleLoginChange = (login) => {
    this.setState({ login });
  };
  
  handleEmailChange = (email) => {
    this.setState({ email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password });
  };

  handleRepeatPasswordChange = (repeat_password) => {
    this.setState({ repeat_password });
  };

  hangleSignUpPress = async () => {
    if(this.state.password != this.state.repeat_password){
      Alert.alert('Passwords do not match')
    }
    console.log(this.state)
    try{
      const response = await api.post('/users/', {
        username: this.state.login,
        password: this.state.password,
        email: this.state.email,
      });
    }
    catch(error){
      if (error.response.status === 401){
        Alert.alert('User already exists'); 
      } 
      else {
        console.debug(error.response)
      }
    }
  }
}

LinksScreen.navigationOptions = {
  header: null,
};
