import React from "react";
import {Button, StyleSheet, Text, View} from "react-native"
import SignUp from "./SignUp";

const SignIn = ({navigation}) => {
    const navigate = () => {
        navigation.navigate("signUp")
    }
    return (
        <View style={styles.mainView}>
        <Text> Sign In </Text>
        <Button
            title="Go to sign up"
            onPress={navigate}
            />
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

export default SignIn