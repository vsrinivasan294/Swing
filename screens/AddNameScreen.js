import React from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput} from 'react-native';
import logo from './assets/images/logo.jpg';


export default class AddNameScreen extends React.Component {
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
  };
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
        <Text numberOfLines={1} style={styles.Destitle}>{"Add the Info"}</Text>
          <Text numberOfLines={1} style={styles.Des}>{"Name"} </Text>
          <TextInput style={styles.input}>
        </TextInput>
        <Text numberOfLines={1} style={styles.Des}>{"Hammocking Capacity"} </Text>
        <TextInput style={styles.input}>
        </TextInput>
        <Text numberOfLines={1} style={styles.Des}>{"Description"} </Text>
        <TextInput style={styles.input}>
        </TextInput>
         <Button title="Add Photo"></Button>
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
},
input: {
    width: 200,
    height: 44,
    padding: 10,
    marginLeft: 30,
    marginRight: 40,
    marginBottom: 10,
  }
});