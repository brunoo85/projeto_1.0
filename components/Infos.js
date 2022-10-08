import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';



export default function Infos({navigation}){

    const menu = [
        {
          id: 1,
          nome: 'Starz Play',
          img: require('../assets/imagens/starz.png'),
          texto: 'Valor: 14:90 por mês \n Clique para recomendações',
        },
        {
          id: 2,
          nome: 'Paramount Plus',
          img: require('../assets/imagens/paramount.png'),
          texto: 'Serviço de Streaming operado pela Paramount com conteudos originais, das transmissões da CBS e conteúdos da biblioteca da Paramount Global',
        },
        {
          id: 3,
          nome: 'GloboPlay',
          img: require('../assets/imagens/globoplay.jpg'),
          texto: 'Valor: 24,90 por mês ',
        },
        {
          id: 4,
          nome: 'Crunchroll',
          img: require('../assets/imagens/crunch.png'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        {
          id: 5,
          nome: 'Telecine',
          img: require('../assets/imagens/telecine.jpeg'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        {
          id: 6,
          nome: 'Youtube Premium',
          img: require('../assets/imagens/youtube.png'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        {
          id: 7,
          nome: 'Hbo max',
          img: require('../assets/imagens/hbomax.jpeg'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        {
          id: 8,
          nome: 'Netflix',
          img: require('../assets/imagens/netflix.jpeg'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        {
          id: 9,
          nome: 'Prime Video',
          img: require('../assets/imagens/prime.png'),
          texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
        },
        
      ];

    return(
        <View style={styles.container}>
            <Text> Teste</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#0A2172',
      marginTop: Constants.statusBarHeight,
    }
  });