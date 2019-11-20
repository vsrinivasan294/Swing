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
    backgroundColor: '#C0C0C0',
    fontSize: 60,
  },
h2: {
    color: 'white',
    backgroundColor: '#C0C0C0',
    fontSize: 18,
    marginTop: 8,
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
  backgroundColor: '#C0C0C0',
  borderWidth: 4, 
  borderColor: 'white',
  color: 'white',

}
});

export default styles
