import React, { useState } from "react";
import { Button, Text } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet, Alert } from 'react-native';

import Container from "./src/components/Container";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Input from "./src/components/Input";

const App = () => {
    const [gas, setGas] = useState('');
    const [eta, setEta] = useState('');
    const [res, setRes] = useState('');

    const handleCalcular = () => {
        if (!gas || gas <= 0 || !eta || eta <= 0) {
            Alert.alert("Atenção, preencha todos os campos corretamente!");
        }else{
            let pct = Math.round((eta / gas) * 100);
            if (pct < 70) {
                setRes("Recomendado abastecer com Etanol. (" + pct + "%)");
            }else{
                setRes("Recomendado abastecer com Gasolina. (" + pct + "%)");
            }
        }
    };

    return (
        <SafeAreaProvider>
            <Container>

                <Header title="Calculadora Flex" />
                
                <Body>

                    <Input
                        label="Preço da Gasolina"
                        value={gas}
                        onChangeText={(text) => setGas(text)}
                    />
                    <Input
                        label="Preço do Etanol"
                        value={eta}
                        onChangeText={(text) => setEta(text)}
                    />
                    <Button mode="contained" onPress={handleCalcular} >
                        Calcular
                    </Button>

                    <Text style={styles.text}>
                        {res}
                    </Text>
                </Body>
            </Container>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    text:{
        textAlign:"center",
        margin:8
    }
});
export default App;