/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


class MeuComponente extends Component{
  render(){
    return (
      <View>
        <Text>Parametro 1</Text>
        <Text>Parametro 2</Text>
      </View>
    );
  }
}

class app3 extends Component{
  render() {
    return (
      <MeuComponente propriedade='teste'></MeuComponente>
    );
  }
}
