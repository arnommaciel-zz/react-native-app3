import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Icone extends Component{
    
    render(){
        // this.props.escolha
        // this.props.jogador
        var images = {
            pedra: require('../../assets/images/pedra.png'),
            papel: require('../../assets/images/papel.png'),
            tesoura: require('../../assets/images/tesoura.png')
        };

        if(this.props.escolha){
            return(
                <View style={{alignItems: 'center', padding: 20}}>
                    <Text style={{color: 'black'}}>{this.props.jogador}</Text>
                    <Image source={images[this.props.escolha]}/>
                </View>
            );
        }
        return false;
    };
}

export default Icone;