import * as React from 'react';
import { Alert, Image, Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { ScrollView, State } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../../../components/StyledText';
import { styles } from './styles'
import { api } from '../../services/api'
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
  
  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  hangleSignInPress = async () => {
    const response = await api.post('/sessions', {
      email: this.state.email,
      password: this.state.password,
    });
  }
}

