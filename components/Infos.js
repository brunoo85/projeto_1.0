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
          nome: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
        {
          id: 10,
          nome: 'Disney+',
          img: require('../assets/imagens/disney.png'),
          texto: 'Valor: R$ 27,90 por mês \n Clique para mais informações e recomendações',
        },
        {
          id: 11,
          nome: 'Star+',
          img: require('../assets/imagens/star.png'),
          texto: 'Planos a partir de: R$ 32,90 por mês \n Clique para mais informações e recomendações',
        },
      ];

      function renderItem({ item }){
        return <View style={styles.opcao}>
          <Image style={styles.imgConfig}source={item.img}/>
          <View style={styles.infoEscolha}>
              <Text style={styles.Texto1}>{item.nome}</Text>
              <Text style={styles.Texto2}>{item.texto}</Text>
        </View>
      </View>
      }

      return (
        <View style={styles.inicio}>
        <FlatList
          data={menu}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>  
    );}

    const styles = StyleSheet.create({
      inicio: {
        flex: 1,
      },
      opcao: {
        backgroundColor:'#0A2342',
        flexDirection: 'row',
        height: 90,
        margin: 1,
      },
      infoEscolha:{
        flexShrink:1,
        alignItens: 'center',
        justifyContent: 'center',
      },
      imgConfig:{
          backgroundColor :'white',
          height:80,
          width: 80,
          borderRadius: 40,
          marginRight: 10,
      },
      Texto1: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'left',
      },
      Texto2: {
        color: 'white',
        fontSize: 14,
        flexShrink:1,
      },
    });