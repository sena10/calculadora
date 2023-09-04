import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Display from "./Display";
import Botao from "./Botao";

export default () => {
    const [resultado, setResultado] = useState("0"); 

    const numero = (n) => {
        if (resultado === "0" || resultado === "Error") {
            setResultado(String(n));
        } else {
            setResultado(resultado + n);
        }
    };

    const limpaTela = () => {
        setResultado("0");
    };

    const operador = (op) => {
        if (op === "=") {
            try {
                
                setResultado(eval(resultado).toString());
            } catch (error) {
                setResultado("Error"); 
            }
        } else {
            setResultado(resultado + " " + op + " ");
        }
    };

    return (
        <View style={style.app}>
            <View style={style.display}>
                <Display resultado={resultado} />
            </View>
            <View style={style.botoes}>
                <Botao valor="C" operador onClick={limpaTela} />
                <Botao valor="()" operador onClick={() => operador("(")} />
                <Botao valor="%" operador onClick={() => operador("%")} />
                <Botao valor="<<" operador onClick={() => operador("<<")} />
                <Botao valor="7" onClick={() => numero("7")} />
                <Botao valor="8" onClick={() => numero("8")} />
                <Botao valor="9" onClick={() => numero("9")} />
                <Botao valor="X" onClick={() => operador("*")} operador />
                <Botao valor="4" onClick={() => numero("4")} />
                <Botao valor="5" onClick={() => numero("5")} />
                <Botao valor="6" onClick={() => numero("6")} />
                <Botao valor="-" onClick={() => operador("-")} operador />
                <Botao valor="1" onClick={() => numero("1")} />
                <Botao valor="2" onClick={() => numero("2")} />
                <Botao valor="3" onClick={() => numero("3")}  />
                <Botao valor="+" onClick={() => operador("+")} operador />
                <Botao valor="." onClick={() => numero(".")}  />
                <Botao valor="0" onClick={() => numero("0")}  />
                <Botao valor="/" onClick={() => operador("/")}  />
                <Botao valor="=" onClick={() => operador("=")} operador />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    fonte: {
        fontSize: 36,
    },
    app: {
        flex: 1,
    },
    display: {
        flex: 3,
    },
    botoes: {
        flex: 5,
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
