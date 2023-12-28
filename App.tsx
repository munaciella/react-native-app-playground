import React from 'react';
import {Text, StyleSheet, Button, View} from 'react-native';

function App(): React.JSX.Element {
  
  return (
    <View style={styles.mainView}>
    <Text style={styles.textStyle}>Hello World!</Text>
    <Button title="click me"/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex:1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textStyle: {
    color: "blue"
  }
})

export default App;
