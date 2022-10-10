import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function InfoDev(){
    return(
        <View style={styles.inicio}>
            <View style={styles.bloco}>
              <Text style={styles.Texto1}>Catálogo de Streaming</Text>
              <Text style={styles.Texto2}>    Para te ajudar na escolha do que assistir ou qual streaming
            escolher para fazer sua assinatura, o Catálogo de Streaming te ajuda nisso. </Text>
              <Text style={styles.Texto2}>    Com informações sobre os principais streamings de 
            video no Brasil e recomendações feitas por nossa curadoria especializada (o desenvolvedor da ferramenta), este 
            aplicativo é uma ferramenta perfeita para você que está procurando praticidade e recomendações de qualidade.</Text>
              <Text style={styles.Texto1}>{'\n'} Sobre o Projeto</Text>
              <Text style={styles.Texto2}>    O seguinte projeto faz parte da avaliação da disciplina Desenvolvimento para dispositivos Móveis (ECT2525),
            ministrada pelo professor Igor Rosberg, como primeira avaliação da matéria. Tratem de dar 5 estrelas no app pra minha nota ser maior.💋💋 </Text>
             <Text style={styles.Texto1}>{'\n'} Sobre o Desenvolvedor</Text>
              <Image style={styles.imgConfig} source={require('../assets/imagens/starz.png')}/>
              <Text style={styles.Texto2}>    O seguinte projeto faz parte da avaliação da disciplina Desenvolvimento para dispositivos Móveis (ECT2525),
            ministrada pelo professor Igor Rosberg, como primeira avaliação da matéria. Tratem de dar 5 estrelas no app pra minha nota ser maior. </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inicio: {
        flex:1,
        backgroundColor: '#001A29',
      },
    bloco: {
      margin: 10,
      backgroundColor: '#0A2172',
        alignItems:'center',
        justifyContent: 'flex-start',
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
      fontSize: 30,
      fontWeight: 'bold',
      
    },
    Texto2: {
      color: 'white',
      fontSize: 16,
      flexShrink:1,
    },
  });