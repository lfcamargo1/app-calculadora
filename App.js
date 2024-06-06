import { Text, SafeAreaView, StyleSheet, View } from 'react-native';

import Botao from "./src/components/Botao";
import Visor from './src/components/Visor';

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <Visor />
      <View style={estilos.botoes}>
      <Botao label ="AC" triplo />
      <Botao label ="/" cor />
      <Botao label ="7"/>
      <Botao label ="8"/>
      <Botao label ="9"/>
      <Botao label ="*" cor />
      <Botao label ="4"/>
      <Botao label ="5"/>
      <Botao label ="6"/>
      <Botao label ="-" cor/>
      <Botao label ="1"/>
      <Botao label ="2"/>
      <Botao label ="3"/>
      <Botao label ="+" cor />
      <Botao label ="0" duplo />
      <Botao label ="."/>
      <Botao label ="=" cor />
      </View>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#900"
  }
});