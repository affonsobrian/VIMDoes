import * as React from 'react';
import { Alert, Image, Button, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { MonoText } from '../../../components/StyledText';
import { styles } from './styles'
export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.centralizedContentContainer}>
        <TextInput style={styles.inputWithBorder}
        placeholder="Login" 
        />
        <TextInput style={styles.inputWithBorder}
        placeholder="Email"
        />
        <TextInput style={styles.inputWithBorder}
        placeholder="Password" secureTextEntry={true}
        />
        <TextInput style={styles.inputWithBorder}
        placeholder="Repeat password" secureTextEntry={true}
        />
      <Button
        title="Sign Up"
        onPress={() => Alert.alert('User registered with success')}
      />
      </ScrollView>
        <View style={[styles.codeHighlightContainer, styles.navigationFilename]}></View>
    </View>
  );
}

LinksScreen.navigationOptions = {
  header: null,
};
