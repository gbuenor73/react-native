import React from 'react'
import { Button } from 'react-native'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title='gerar numero'
            onPress={function () {
                const a = gerarNumero(props.min, props.max)
                props.funcao(a, 'O valor é: ')
            }
            }
        />
    )
}