import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View , Image, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';



export default function Infos({route}){

        switch (route.params.id){
          case(1):
          return (
            <View style={styles.inicio}>
              <View style={styles.bloco}>
                <Text style={styles.Texto1}> Disney+</Text>
                <Image style={styles.imgConfig} source={require('../assets/imagens/disney.png')} />
                <Text style={styles.Texto2}> Disney+ é o serviço de streaming por assinatura da Disney que traz títulos de Disney, Pixar, Marvel, Star Wars e National Geographic, 
                tudo em um só lugar.  (fonte: Disney+) {"\n"} Focado em conteúdo -18.</Text>
                <Text style={styles.Texto1}> Recomendações do catálogo</Text>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/wanvidis.jpg')} />
                <Text style={styles.Texto2}> Wandavision (Série)</Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/phineasdis.jpg')} />
                <Text style={styles.Texto2}> Phineas e Ferb (Série)</Text>
                  </View>
                </View>
    
                <View style={styles.recGeral}>
                  <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/encdi.jpeg')} />
                <Text style={styles.Texto2}> Encantada (Filme) </Text>
                  </View>
                  <View style={styles.rec}>
                  <Image style={styles.imgRec} source={require('../assets/imagens/cardis.jpg')} />
                <Text style={styles.Texto2}> Carros (Filme)</Text>
                  </View>
                </View>
              </View>
          </View>
        );
          case (2):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Paramount+</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/paramount.png')} />
                  <Text style={styles.Texto2}> Paramount+ é um serviço de streaming norte-americano de propriedade e 
                  operado pela Paramount Streaming, uma divisão da Paramount Global. Oferece conteúdo original, conteúdo 
                  recém-transmitido nas propriedades de transmissão da CBS e conteúdo da biblioteca da Paramount Global.</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/DS9crew.jpg')} />
                  <Text style={styles.Texto2}> Star Trek: {"\n"}Deep Space Nine</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/hanpar.jpg')} />
                  <Text style={styles.Texto2}> The Handmaid's Tale(Série)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/ela.jpg')} />
                  <Text style={styles.Texto2}> Ela (Filme)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/pulpar.jpg')} />
                  <Text style={styles.Texto2}> Pulp Fiction (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          break
          case (3):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Globoplay</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/globoplay.jpg')} />
                  <Text style={styles.Texto2}> O serviço oferece produções originais
                   e exclusivas em parceria com os canais da Globo, produtoras internacionais e produtoras 
                   independentes, seja em filmes, séries, programas de TV ou podcasts. (Wikipedia)  {"\n"} </Text>

                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/tapglob.jpg')} />
                  <Text style={styles.Texto2}> Tapas e Beijos (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/cenglob.jpg')} />
                  <Text style={styles.Texto2}> Central do Brasil (Filme)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/docglob.jpg')} />
                  <Text style={styles.Texto2}> Doctor Who (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/monglob.jpg')} />
                  <Text style={styles.Texto2}>Monstos vs. alienigenas (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (4):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}>Crunchyroll</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/crunch.png')} />
                  <Text style={styles.Texto2}> A Crunchyroll é um serviço de streaming voltado a um público bem específico, 
                  pois ela é focada nos animes, os desenhos animados japoneses. O seu maior diferencial é o foco em agilidade e 
                  adição quase que imediata com o lançamento no japão, já legendado. {"\n"}</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/deacru.jpg')} />
                  <Text style={styles.Texto2}>Death Note</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/keecru.jpg')} />
                  <Text style={styles.Texto2}>Keep Your Hands Off Eizouken!</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/rancru.jpg')} />
                  <Text style={styles.Texto2}>Ranking of Kings</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/onecru.jpg')} />
                  <Text style={styles.Texto2}>One Piece</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (5):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Apple tv+</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/apple.png')} />
                  <Text style={styles.Texto2}> O Apple TV+ é um serviço de streaming com Apple Originals. Aqui você assiste a séries premiadas, dramas envolventes, 
                  documentários surpreendentes, diversão para as crianças, comédias e muito mais. E tem programas Apple Originals estreando todos os meses. (fonte: Apple.com)</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/caltv.jpg')} />
                  <Text style={styles.Texto2}>Calls (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/wolfapp.jpg')} />
                  <Text style={styles.Texto2}>Wolfwalkers</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/ruptv.jpg')} />
                  <Text style={styles.Texto2}>Severance(Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/opCerejap.jpg')} />
                  <Text style={styles.Texto2}>Operação Cerveja (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (6):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Youtube Premium</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/youtube.png')} />
                  <Text style={styles.Texto2}>YouTube Premium  é um serviço de assinatura de streaming pelo YouTube.Além do catálogo exclusivo, os usuários ficam sem publicidade 
                  ao assistir qualquer vídeo hospedados pelo YouTube, além de reprodução off-line e reprodução em segundo plano.</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/impyou.jpg')} />
                  <Text style={styles.Texto2}> Impsulse (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/lizyou.jpg')} />
                  <Text style={styles.Texto2}>Liza on demand (Série)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/wayou.jpg')} />
                  <Text style={styles.Texto2}>Wayne (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/sheryou.jpg')} />
                  <Text style={styles.Texto2}>Sherwood (Série)</Text>
                    </View>
                  </View>
                </View>
              
            </View>  
          );
          case (7):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Hbo Max</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/hbomax.jpeg')} />
                  <Text style={styles.Texto2}> O HBO Max é o serviço de streaming de filmes e séries do grupo WarnerMedia, detentor do canal de TV por assinatura HBO. O catálogo do 
                  serviço reune toda a programação do canal de TV, somada a outras atrações do grupo WarnerMedia, além dos Hbo Max Originals.(TechTudo)</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/tuchbo.jpg')} />
                  <Text style={styles.Texto2}>Tuca & Berie (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/hanhbo.jpeg')} />
                  <Text style={styles.Texto2}>Hancock (Filme)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/roohbo.jpg')} />
                  <Text style={styles.Texto2}> Room 104 (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/corhbo.jpg')} />
                  <Text style={styles.Texto2}> Coringa (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (8):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Prime Video</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/paramount.png')} />
                  <Text style={styles.Texto2}>Amazon Prime Video é um dos serviços ofertados na assinatura do Amazon Prime. O serviço de streaming contém produções originais e 
                  integração com outros canais, onde é possível adicionar extensões do conteúdo na conta.</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/flepri.jpg')} />
                  <Text style={styles.Texto2}>Fleabag (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/shopri.png')} />
                  <Text style={styles.Texto2}>O show do Truman (Filme)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/talpri.jpg')} />
                  <Text style={styles.Texto2}>Tales from the {"\n"}loop (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/beipri.jpg')} />
                  <Text style={styles.Texto2}>Beijos escondidos (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (9):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Netflix</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/netflix.jpeg')} />
                  <Text style={styles.Texto2}>Netflix oferece uma ampla variedade de séries, filmes e documentários premiados. Você pode assistir a 
                  quantos filmes e séries quiser, quando e onde quiser, sem comerciais. Aqui você sempre encontra 
                  novidades. A cada semana são adicionadas novas séries e filmes.</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/themid.jpg')} />
                  <Text style={styles.Texto2}>The Midnight Gospel (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/shrnet.jpg')} />
                  <Text style={styles.Texto2}>Shrek (Filme)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/eyes_net.jpg')} />
                  <Text style={styles.Texto2}>Olhos que condenam (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/ticnet.jpg')} />
                  <Text style={styles.Texto2}>Tick Tick Boom (Filme)</Text>
                    </View>
                  </View>
                  
                </View>
              
            </View>  
          );
          case (10):
            return (
              <View style={styles.inicio}>
                <View style={styles.bloco}>
                  <Text style={styles.Texto1}> Star+</Text>
                  <Image style={styles.imgConfig} source={require('../assets/imagens/star.png')} />
                  <Text style={styles.Texto2}>O Star+ inclui produções da ABC Signature, 20th Television e 20th Television Animation, e muitos outros. 
                  Além disso, inclui esportes ao vivo da ESPN, programação original exclusiva do Star.</Text>
                  <Text style={styles.Texto1}> Recomendações do catálogo</Text>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/arqsta.jpg')} />
                  <Text style={styles.Texto2}>Arquivo X (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/reista.jpg')} />
                  <Text style={styles.Texto2}>O rei do Show (Filme)</Text>
                    </View>
                  </View>
      
                  <View style={styles.recGeral}>
                    <View style={styles.rec}>
                      <Image style={styles.imgRec} source={require('../assets/imagens/solsta.jpg')} />
                  <Text style={styles.Texto2}>Solar Opposites (Série)</Text>
                    </View>
                    <View style={styles.rec}>
                    <Image style={styles.imgRec} source={require('../assets/imagens/sexsta.jpg')} />
                  <Text style={styles.Texto2}>O Sexto Sentido(Filme)</Text>
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
        justifyContent:'center',
      }, 
      imgConfig:{
          backgroundColor :'white',
          height:200,
          width: 200,
          borderRadius: 40,
          margin: 10,
      },
      imgRec:{
        backgroundColor :'white',
        height:180,
        width: 180,
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