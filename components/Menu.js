import React,  {useEffect , useState } from 'react';
import { StyleSheet, Text, View, Image,FlatList , TouchableOpacity} from 'react-native';


export default function Menu({navigation}) {
 
  const [menu, setMenu] = useState([]);

  useEffect(function(){
    async function getData(){
      const response = await fetch('https://raw.githubusercontent.com/brunoo85/projeto_1.0/main/listaMenu.json');
      const menuServidor = await response.json();
       setMenu(menuServidor)
    }
    getData();
  }, []);

    function renderItem({ item }){
      return <TouchableOpacity style={styles.opcao} onPress={() => navigation.navigate('StreamingScreen',{id: item.id})}>
        <Image style={styles.imgConfig}source={item.imgPerfil}/>
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