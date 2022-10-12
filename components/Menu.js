import React,  {useEffect , useState } from 'react';
import { StyleSheet, Text, View, Image,FlatList , TouchableOpacity} from 'react-native';


export default function Menu({navigation}) {
 
    const menu = [
      {
        id: 1,
        nome: 'Starz Play',
        img: require('../assets/imagens/starz.png'),
        texto: 'Valor: R$ 14,90 por mês \n Clique para mais informações e recomendações ',
      },
      {
        id: 2,
        nome: 'Paramount Plus',
        img: require('../assets/imagens/paramount.png'),
        texto: 'Valor: R$ 14,90 por mês \n Clique para mais informações e recomendações ',
      },
      {
        id: 3,
        nome: 'Globoplay',
        img: require('../assets/imagens/globoplay.jpg'),
        texto: 'Valor: R$ 24,90 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 4,
        nome: 'Crunchyroll',
        img: require('../assets/imagens/crunch.png'),
        texto: 'Planos a partir de: R$ 14,99 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 5,
        nome: 'Apple Tv+',
        img: require('../assets/imagens/apple.png'),
        texto: 'Valor: R$ 14,90 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 6,
        nome: 'Youtube Premium',
        img: require('../assets/imagens/youtube.png'),
        texto: 'Planos a partir de: R$ 12,50 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 7,
        nome: 'Hbo max',
        img: require('../assets/imagens/hbomax.jpeg'),
        texto: 'Planos a partir de: R$ 14,16 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 8,
        nome: 'Netflix',
        img: require('../assets/imagens/netflix.jpeg'),
        texto: 'Planos a partir de: R$ 25,90 por mês \n Clique para mais informações e recomendações',
      },
      {
        id: 9,
        nome: 'Prime Video',
        img: require('../assets/imagens/prime.png'),
        texto: 'Planos a partir de: R$ 9,90 por mês \n Clique para mais informações e recomendações',
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
        texto: 'Planos a partir de: R$ 9,90 por mês \n Clique para mais informações e recomendações',
      },
    ];
  
    function renderItem({ item }){
      return <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('StreamingScreen',{id: item.id})}>
        <Image style={styles.imgConfig}source={item.img}/>
        <View style={styles.infoEscolha}>
            <Text style={styles.Texto1}>{item.nome}</Text>
            <Text style={styles.Texto2}>{item.texto}</Text>
      </View>
    </TouchableOpacity>
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