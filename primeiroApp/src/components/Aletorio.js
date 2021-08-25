import React from 'react'
import { Text } from "react-native"
import Estilo from "./Estilo"

export default ({ inicio, fim }) => {

    const asd = parseInt(Math.random() * (fim - inicio + 1)) + fim

    return (
        <Text style={Estilo.txtG}>
            O numero aleatorio gerado foi: {asd}
        </Text>
    )
}