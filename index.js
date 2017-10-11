import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class app3 extends Component{
    
    constructor(props){
        super(props);
        this.state = {usuario:'', maquina: '', resultado: ''}
    }

    jokenpo(usuario){
        var opcoes = [
            "pedra",
            "papel",
            "tesoura"
        ];
        
        var maquina = opcoes[Math.floor(Math.random()*3)];
        
        var resultado = '';
        if(maquina == usuario){
            resultado = 'Empate';
        } else if(maquina == 'pedra'){
            if(usuario == 'papel'){
                resultado = 'Você Ganhou!';
            } else if(usuario == 'tesoura'){
                resultado = 'Você Perdeu!';
            }
        } else if(maquina == 'papel'){
            if(usuario == 'tesoura'){
                resultado = 'Você Ganhou!';
            } else if(usuario == 'pedra'){
                resultado = 'Você Perdeu!';
            }
        } else if(maquina == 'tesoura'){
            if(usuario == 'pedra'){
                resultado = 'Você Ganhou!';
            } else if(usuario == 'papel'){
                resultado = 'Você Perdeu!';
            }
        }
        this.setState({
            usuario:usuario,
            maquina:maquina,
            resultado:resultado
        });
    }

    render() {
        return (
            <View style={{paddingTop:25}}>
                <Text>Escolha do computador: {this.state.maquina}</Text>
                <Text>Escolha do usuário: {this.state.usuario}</Text>
                <Text>Resultado: {this.state.resultado}</Text>
                <Button title='pedra' onPress={() => {this.jokenpo('pedra')}}/>
                <Button title='papel'onPress={() => {this.jokenpo('papel')}}/>
                <Button title='tesoura'onPress={() => {this.jokenpo('tesoura')}}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('app3', () => app3);
