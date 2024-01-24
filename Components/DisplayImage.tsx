import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  }
});

const DisplayAnImage = () => {
    return (
      <View style={styles.container}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDx-dxue1ShIKetvzJKLDFmVxI3F4bKVHarfAUsnVL7H0TK7qhqVBmrib4WHLBp9TWZ74&usqp=CAU',
          }}
        />
      </View>
    );
  };
  
  export default DisplayAnImage;