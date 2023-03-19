import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#7597de', flexGrow: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <Text style={estilo.titulo}>Paises Ricos</Text>
        <Text style={estilo.subtitulo}>1° Catar</Text>
        <Image
          style={{ width: '100%', height: '50%', borderRadius: 30 }}
          source={{
            uri: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/11/08/onde-fica-o-catar,-sede-da-copa-do-mundo-2022-1hv0glhx0vynp.jpg',
          }}
        />
        <Text>
          O Catar é um país peninsular árabe cuja paisagem abrange um deserto
          árido e um longo litoral no Golfo Pérsico Árabe repleto de praias e
          dunas.
        </Text>
        <Text style={estilo.subtitulo}>2° Luxemburgo</Text>
        <Image
          style={{ width: '100%', height: '50%', borderRadius: 30 }}
          source={{
            uri: 'https://content.r9cdn.net/rimg/dimg/9a/49/f400ca9a-city-15148-1661b6ba1fe.jpg?width=1366&height=768&xhint=1939&yhint=1666&crop=true',
          }}
        />
        <Text>
          A capital, Cidade de Luxemburgo, é famosa por sua antiga cidade
          medieval fortificada sobre penhascos íngremes. Ele é um pequeno país
          europeu rodeado pela bélgica.
        </Text>
        <Text style={estilo.subtitulo}>3°Cingapura</Text>

        <Image
          style={{ width: '100%', height: '50%', borderRadius: 30 }}
          source={{
            uri: 'https://prefiroviajar.com.br/wp-content/uploads/cingapura-ou-singapura.jpg'
          }}
        />
        <Text>
          Singapura, oficialmente República de Singapura, é uma cidade-Estado
          insular localizada na ponta sul da Península Malaia, no Sudeste
          Asiático, 137 quilômetros ao norte do equador. Wikipédia
        </Text>
        <Text style={estilo.subtitulo}>4°Brasil</Text>
        <Image
          style={{ width: '100%', height: '50%', borderRadius: 30 }}
          source={{
            uri: 'https://cdn.maioresemelhores.com/imagens/paisagens-mais-bonitas-do-brasil-og.jpg'
          }}
        />
        <Text>
          O Brasil, um vasto país sul-americano, estende-se da Bacia Amazônica,
          no norte, até os vinhedos e as gigantescas Cataratas do Iguaçu, no
          sul. O Rio de Janeiro, simbolizado pela sua estátua de 38 metros de
          altura do Cristo Redentor,
        </Text>
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    fontSize: 60,
    color: '#5d0084',
    marginBottom: 30,
  },
  subtitulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#5d0084',
  },
});
