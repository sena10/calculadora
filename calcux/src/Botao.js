import React from "react";
import { TouchableHighlight, Text, StyleSheet, Dimensions } from "react-native";


export default props => {
    return (
        <TouchableHighlight onPress={props.onClick} >
            <Text style={props.operador ? style.botaoOperadores : style.botaoNumeros }>{props.valor}</Text>
        </TouchableHighlight>
    )
}

const style = StyleSheet.create({
    botaoNumeros:{
        fontSize: 36,
        padding: 20,
        fontWeight: "bold",
        borderColor: "white",
        backgroundColor: "#d3d3d3",
        color: "black",
        borderWidth: 1,
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").width / 4,
        textAlign: "center",

    },
    botaoOperadores:{
        fontSize: 36,
        padding: 20,
        fontWeight: "bold",
        borderColor: "white",
        backgroundColor: "#a9a9a9",
        color: "green",
        borderWidth: 1,
        width: Dimensions.get("window").width / 4,
        height: Dimensions.get("window").width / 4,
        textAlign: "center",
    }
})