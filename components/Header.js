import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
import { FontAwesome5} from '@expo/vector-icons';

export default function Header({navigation}) {
    return (
        <View style={styles.header}>
            <Image style={styles.titulo} source={require('../assets/imagens/catalogo.png')}/>
            <FontAwesome5 style={styles.icone}name="info-circle" size={25} color="black" onPress={()=>navigation.navigate('Infos')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      padding: 10,
      height: 50,
      backgroundColor: '#4D7C8A',
      alignItens: 'center',
      justifyContent: 'space-between',
    },
    titulo:{
      height: '100%',
      width:320,
      alignItens: 'center',
    },
    icone:{
      alignSelf: 'flex-end',
      alignItens: 'center',
    },
  });