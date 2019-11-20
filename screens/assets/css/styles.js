import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({

container: {
    flex: 1,
    backgroundColor: '#F9CB9C',
    alignItems: 'center',
    justifyContent: 'center',
  },
h1: {
    color: 'white',
    fontSize: 60,
  },
h2: {
    color: '#828282',
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
  },
h3: {
  color: 'white',
  fontSize: 36,
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
},
bottomContainer: {
  justifyContent: 'flex-end',
  width: '90%',
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
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  }
});

export default styles
