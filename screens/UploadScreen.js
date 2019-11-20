import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class UploadScreen extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('Camera')}> TAKE A PICTURE</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('Image')}> UPLOAD A PICTURE</Text>
          </View>
        
      </View>
     
    );
  }
}


