import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

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
            <View style={{paddingTop:20}}>
                <Topo/>
                <View style={styles.actions}>
                    <View style={styles.btn}>
                        <Button title='pedra' onPress={() => {this.jokenpo('pedra')}}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title='papel'onPress={() => {this.jokenpo('papel')}}/>
                    </View>
                    <View style={styles.btn}>
                        <Button title='tesoura'onPress={() => {this.jokenpo('tesoura')}}/>
                    </View> 
                </View>
                <View style={styles.results}>
                    <Text style={styles.resultado}>{this.state.resultado}</Text>
                    
                    <Icone escolha={this.state.maquina} jogador='Computador'/>
                    <Icone escolha={this.state.usuario} jogador='Você'/>
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    btn:{
        width: 90
    },
    actions:{
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    results:{
        alignItems: 'center'
    },
    resultado:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',        
        padding: 20
    }
});
AppRegistry.registerComponent('app3', () => app3);
