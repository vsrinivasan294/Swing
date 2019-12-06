import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
h1: {
    color: 'white',
    fontSize: 60,
  },
h2: {
    color: 'white',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
  },
h3: {
  color: 'white',
  fontSize: 22,
  justifyContent: 'center',
  textAlign: 'center',
},
items: {
    color: '#828282',
    fontSize: 36,
    justifyContent: 'center',
    //textAlign: 'center',
  },
pic: {
  width: 300,
  height: 260,
  justifyContent: 'center',
},
topContainer: {
  flex: 2,
  justifyContent: 'center',
  alignItems: 'center',
},
middleContainer: {
  flex: 3,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#feac00',
},
bottomContainer: {
  justifyContent: 'flex-end',
  width: '100%',
  margin: 20,
  padding: 10,
}, 
button: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F9CB9C',
  borderWidth: 3, 
  borderColor: 'white'
}, 
input: {
    width: 250,
    height: 44,
    padding: 10,
    marginLeft: 40,
    marginRight: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
background: {
  flex: 1,
  backgroundColor: '#feac00',
},
headerTitleStyle: {
  fontFamily: 'Hoefler Text',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 60,
  color: '#e52b06'
},
buttonContainerTop: {
    height: 80,
    backgroundColor: "#fe0055",
    justifyContent: 'center',
    alignItems: 'center',
},
buttonContainerBottom: {
    height: 80,
    backgroundColor: "#ab044f",
    justifyContent: 'center',
    alignItems: 'center',
},
logInButton: {
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e52b06",
    padding: 15,
    marginTop: 30,
    borderRadius:30,
},
title: {
  color: '#121212',
  fontSize: 24,
  justifyContent: 'center',
  textAlign: 'center',
  marginBottom: 40,
  marginTop: 80,
}
});

export default styles
