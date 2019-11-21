import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Navigator } from 'react-native';
import logo from './assets/images/logo.jpg';


export default class DescriptionScreen extends React.Component {
  static navigationOptions = {
    title: "Swing",
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
  }
  render() {
    const Images = [
        { uri: "https://i.imgur.com/iwyuxOR.jpg" },
        { uri: "https://i.imgur.com/aUeBiR8.jpg" },
        { uri: "https://i.imgur.com/4qm8LWE.jpg" },
        { uri: "https://i.imgur.com/TJzHJcZ.jpg" }
      ]

    const title =  "Hammock Beach";
    const description =  "This is the best Hammock on the beach";
    return (
    <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.Destitle}>{"Beach Hammock"}</Text>
        <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
        <Image
          source={require("./assets/images/ham.jpg")} style={styles.Image}>
        </Image>
        </View>
        <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Distance:"}</Text>
          <Text style={styles.Des}> {"2 miles"} </Text>
        </Text>
        <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Capacity:"}</Text>
          <Text style={styles.Des}> {"2 hammocks"} </Text>
        </Text>
         <Text style={styles.Des}>
          <Text style={styles.Desbold}>{"Description:"}</Text>
          <Text style={styles.Des}> {"Beautiful view with comfortable hammock. Only come here if you want to get a bad sunburn."} </Text>
        </Text>
      </View> 
    );
  }
}


const styles = StyleSheet.create({

Destitle: {
  fontSize: 40,
  marginTop: 20,
  marginLeft: 10,
  marginRight: 10,
  textAlign: "center",
  fontFamily: "Arial", 
},
Image: {
  marginTop: 20,
  height: 300,
  width: 300,
  alignItems: 'center',
  justifyContent: 'center', 
},
Desbold: {
  fontSize: 20,
  marginTop: 30,
  marginLeft: 40,
  marginRight: 40,
  fontFamily: "Arial", 
  fontWeight: 'bold',
},
Des: {
  fontSize: 20,
  marginTop: 30,
  marginLeft: 40,
  marginRight: 40,
  fontFamily: "Arial", 
}
});