import React from "react";
import {Button, StyleSheet, Text, View} from "react-native"
import SignUp from "./SignUp";

const SignIn = ({navigation}) => {
    const navigate = () => {
        navigation.navigate("signUp")
    }
    return (
        <View style={styles.mainView}>
        <View style={styles.TopView}></View>
        <View style={styles.BottomView}></View>
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
      TopView: {
        width: "100%",
        height: '40%',
      },
      BottomView: {
        width: "100%",
        height: '60%',
        backgroundColor: "red"
      },
      textStyle: {
        color: "blue"
      }
    })

export default SignIn