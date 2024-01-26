import React from 'react';
import {Button, StyleSheet, Text, View, Image, TextInput} from 'react-native';
import SignUp from './SignUp';

const SignIn = ({navigation}) => {
  const navigate = () => {
    navigation.navigate('signUp');
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require('./../assets/icon.png')}
        />
      </View>
      <View style={styles.BottomView}>
        <Text style={styles.Heading}>Welcome{'\n'} Back </Text>
        <View style={styles.FormView}>
          <TextInput placeholder={"Email"} placeholderTextColor={"white"} style={styles.TextInput}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TopView: {
    width: '100%',
    height: '35%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '65%',
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ImageStyle: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  Heading: {
    color: '#fff',
    fontSize: 42,
    fontWeight: 'bold',
    marginLeft: 40,
    marginTop: 60,
  },
  TextInput: {
    width: '90%',
    borderWidth: 1, 
    borderColor: 'white',
    height: 50,
    borderRadius: 10,
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default SignIn;
