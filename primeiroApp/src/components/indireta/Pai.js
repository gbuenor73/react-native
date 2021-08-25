import React, { useState } from 'react'
import { Text } from 'react-native'
import Filho from '../indireta/Filho'
import Estilo from '../Estilo'

export default props => {

    const [txt, setTxt] = useState('')
    const [num, setNum] = useState(0)

    function exibirValor(numero, texto) {
        setNum(numero)
        setTxt(texto)
    }

    return (
        <>
            <Text style={Estilo.txtG}>{txt}{num}</Text>
            <Filho
                min={1}
                max={10}
                funcao={exibirValor}
            />
        </>
    )
}