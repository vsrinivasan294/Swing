import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert, AppRegistry, FlatList } from 'react-native';
import logo from './assets/images/logo.jpg';
import styles from './assets/css/styles';


export default class BrowseScreen extends React.Component {
  static navigationOptions = {
    title: "Swing",
    headerLeft: null,
    headerStyle: {
      backgroundColor: "#feac00"
    },
    headerTitleStyle: {
      fontFamily: 'Hoefler Text',
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 26,
      color: '#e52b06'
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('BySpot')}>Browse By Spot</Text>
          <Text style={styles.h3} onPress={() => this.props.navigation.navigate('ByLocation')}>Browse By Location</Text>
         
        </View>
      </View>
     
    );
  }
}


