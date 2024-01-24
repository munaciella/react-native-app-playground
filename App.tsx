import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';
// import {Text, StyleSheet,SafeAreaView, ScrollView, StatusBar, Button, Pressable, View } from 'react-native';
// import DisplayAnImage from './Components/DisplayImage';
// import ModalApp from './Components/ModalApp';
import SignIn from './Screens/Signin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Screens/SignUp';

function App(): React.JSX.Element {

  // const [timesPressed, setTimesPressed] = useState(0);

  // let textLog = '';
  // if (timesPressed > 1) {
  //   textLog = timesPressed + 'x cunt';
  // } else if (timesPressed > 0) {
  //   textLog = 'you are a cunt';
  // }
  
  const Stack = createNativeStackNavigator();
  
  return (
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="signIn" component={SignIn} />
              <Stack.Screen name="signUp" component={SignUp} />
            </Stack.Navigator>
          </NavigationContainer>
  // <SafeAreaView style={styles.container}>
  //     <ScrollView style={styles.scrollView}>
  //       <Text style={styles.text}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //         aliquip ex ea commodo consequat. Duis aute irure dolor in
  //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //         culpa qui officia deserunt mollit anim id est laborum.
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //         aliquip ex ea commodo consequat. Duis aute irure dolor in
  //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //         culpa qui officia deserunt mollit anim id est laborum.
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //         aliquip ex ea commodo consequat. Duis aute irure dolor in
  //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //         culpa qui officia deserunt mollit anim id est laborum.
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
  //         minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  //         aliquip ex ea commodo consequat. Duis aute irure dolor in
  //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  //         culpa qui officia deserunt mollit anim id est laborum.
  //       </Text>
  //       <Button title="click me"/>
  //       <View style={styles.container}></View>
  //       <Pressable
  //       onPress={() => {
  //         setTimesPressed(current => current + 1);
  //       }}
  //       style={({pressed}) => [
  //         {
  //           backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
  //         },
  //         styles.wrapperCustom,
  //       ]}>
  //       {({pressed}) => (
  //         <Text style={styles.buttonText}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
  //       )}
  //     </Pressable>
  //     <View style={styles.logBox}>
  //       <Text testID="pressable_press_console">{textLog}</Text>
  //     </View>
  //     <ModalApp></ModalApp>
  //     </ScrollView>
  //     <DisplayAnImage></DisplayAnImage>
  //   </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
//   scrollView: {
//     backgroundColor: 'white',
//     marginHorizontal: 20,
//   },
//   text: {
//     fontSize: 22,

//     <View style={styles.mainView}>
//     <Text style={styles.textStyle}>Hello World!</Text>
//     <Button title="click me"/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   mainView: {
//     marginTop: 40,
//     flex:1,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   textStyle: {
//     color: "blue"
  


// },
//   buttonText: {
//     fontSize: 16,
//   },
//   wrapperCustom: {
//     borderRadius: 8,
//     padding: 6,
//   },
//   logBox: {
//     padding: 20,
//     margin: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: '#f0f0f0',
//     backgroundColor: '#f9f9f9',
//   },
// })

export default App;
