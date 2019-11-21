import React from 'react';
import { StyleSheet, Text, View, Image, Button, Navigator, TextInput, Alert } from 'react-native';
import {
  SafeAreaView
} from 'react-native';

export default class HeaderScreen extends React.Component {
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
      <SafeAreaView style={styles.safeArea}>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ddd'
  }
})