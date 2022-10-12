import React from 'react';
import { View , Image, StyleSheet, Text } from 'react-native';

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
              <Image style={styles.imgConfig} source={require('../assets/imagens/perfilDev.jpg')} />
              <Text style={styles.Texto2}>    Bruno Cesar, atualmente com 21 anos, é um (sofredor) estudante de c&t e possui
                bem mais carisma do que habilidades em programação, mas está indo bem, eu acho. </Text>
                <Text style={styles.Texto2}>    Este projeto foi idealizado em torno do mercado de séries pois é 
                algo que ele possui muito interesse e tem propriedade pra falar do assunto (mentira).</Text>
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
    imgConfig:{
      backgroundColor :'white',
      height: 200,
      width: 200,
  },
  });