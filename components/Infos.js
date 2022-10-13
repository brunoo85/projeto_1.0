import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';



export default function Infos({route}){
  console.log(route.params.id+1);
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

      if(route.params.id==1){
        return (
            <View style={styles.inicio}>
              <View style={styles.bloco}>
                <Text style={styles.Texto1}> Deu certo aqui o 1</Text>
                <Image style={styles.imgConfig} source={require('../assets/imagens/star.png')} />
                <Text style={styles.Texto2}> Hora de fazer uma lista com as informações dos streamings que vc quer 
                colocar aqui.</Text>
                <Text style={styles.Texto1}> Recomendações do catálogo</Text>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> A casa do dragão (Série)</Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Hairspray (Filme)</Text>
                  </View>
                </View>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Room 104 (Série)</Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Coringa (Filme)</Text>
                  </View>
                </View>
              </View>
          </View>
        ); } else{
          return (
            <View style={styles.inicio}>
              <View style={styles.bloco}>
                <Text style={styles.Texto1}> Nome do serviço de streaming</Text>
                <Image style={styles.imgConfig} source={require('../assets/imagens/globoplay.jpg')} />
                <Text style={styles.Texto2}> Hora de fazer uma lista com as informações dos streamings que vc quer 
                colocar aqui.</Text>
                <Text style={styles.Texto1}> Recomendações do catálogo</Text>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> A casa do dragão (Série)</Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Hairspray (Filme)</Text>
                  </View>
                </View>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Room 104 (Série)</Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/perfilDev.jpg')} />
                <Text style={styles.Texto2}> Coringa (Filme)</Text>
                  </View>
                </View>
                
              </View>
            
          </View>  
        );
        }
     }

    const styles = StyleSheet.create({
      inicio: {
        flex: 1,
      },
      bloco: {
        margin: 10,
        backgroundColor: '#0A2172',
          alignItems:'center',
          justifyContent: 'flex-start',
      },
      recGeral:{
        flexDirection: 'row',
      },
      rec:{
        alignItems:'center',
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
          height:230,
          width: 230,
          borderRadius: 40,
          margin: 10,
      },
      imgRec:{
        backgroundColor :'white',
        height:200,
        width: 200,
        borderRadius: 40,
        margin: 10,
    },
      Texto1: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'left',
      },
      Texto2: {
        color: 'white',
        fontSize: 16,
        flexShrink:1,
        lineHeight: 25,
      },
    });