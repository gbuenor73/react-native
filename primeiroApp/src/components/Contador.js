import React, { useState } from 'react'
import { Button, Text } from 'react-native'
import Estilo from './Estilo'

export default props => {
    // let numero = props.inicial
    const [numero, setNumero] = useState(props.inicial)


    const inc = () => setNumero(numero + props.passo)
    const dec = () => setNumero(numero - props.passo)


    return (
        <>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>

        </>
    )
}