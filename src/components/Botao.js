import { Text, TouchableHighlight, StyleSheet, Dimensions } from "react-native"

const{width, height} = Dimensions.get("window")

export default props => {

    const estilosBotao = [estilos.botao]
    if (props.duplo) estilosBotao.push(estilos.botaoDuplo)
    if (props.triplo) estilosBotao.push(estilos.botaoTriplo)
    if (props.cor) estilosBotao.push(estilos.botaoCor)
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={estilosBotao}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({
    botao: {
        color: "#fafafa",
        fontSize: 40,
        width: width / 4,
        height: width / 4,
        padding: 20,
        textAlign: "center",
        borderWidth: 1,
        border: "none",
        borderRadius: 50,
        backgroundColor: "#333333"
    },
    botaoDuplo: {
        width: width/ 4 * 2
    },
    botaoTriplo: {
        backgroundColor: "#a5a5a5",
        width: width/ 4 * 3
    },
    botaoCor: {
        backgroundColor: "#ff9f0a"
    }
})