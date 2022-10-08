import React,  {useEffect , useState } from 'react';
import { StyleSheet, Text, View, Image,FlatList , TouchableOpacity} from 'react-native';


export default function Menu({navigation}) {
 
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
      {
        id: 10,
        nome: 'Prime Video',
        img: require('../assets/imagens/prime.png'),
        texto: 'informações complementares para nivel de teste informações complementares para nivel de teste',
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