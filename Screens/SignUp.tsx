import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.TopView}>
        <Image
          style={styles.ImageStyle}
          source={require('./../assets/icon.png')}
        />
      </View>
      <ScrollView style={styles.BottomView}>
        <Text style={styles.Heading}>Create{'\n'}account </Text>
        <View style={styles.FormView}>
          <TextInput
            placeholder={'Full name'}
            placeholderTextColor={'white'}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={'Email'}
            placeholderTextColor={'white'}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={'Mobile'}
            placeholderTextColor={'white'}
            style={styles.TextInput}
          />
          <TextInput
            placeholder={'Password'}
            secureTextEntry={true}
            placeholderTextColor={'white'}
            style={styles.TextInput}
          />
           <TextInput
            placeholder={'Confirm Password'}
            secureTextEntry={true}
            placeholderTextColor={'white'}
            style={styles.TextInput}
          />
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.ButtonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    height: '22%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomView: {
    width: '100%',
    height: '78%',
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
  },
  ImageStyle: {
    width: 150,
    height: 150,
    marginBottom: 15,
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
    paddingLeft: 10,
    marginTop: 10,
    color: 'white',
  },
  FormView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  Button: {
    width: '90%',
    color: '#000',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  SignUpText: {
    color: 'gray',
  },
  TextButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SignUp;
