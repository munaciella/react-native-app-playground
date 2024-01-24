import React from "react";
import {Button, StyleSheet, Text, View} from "react-native"

const SignUp = () => {
    return (
        <View style={styles.mainView}>
        <Text> Sign Up </Text>
        <Button
            title="Sign Up"
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

export default SignUp