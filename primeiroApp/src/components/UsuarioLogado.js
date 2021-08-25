import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'
import _if from './if'

export default props => {
    const usuario = props.usuario || {}

    return (
        <>
            <_if teste={usuario && usuario.nome && usuario.email}>
                <Text style={Estilo.txtG}>Usuario Logado:</Text>
                <Text style={Estilo.txtG}>{usuario.nome} - {usuario.email}</Text>
            </_if>
        </>
    )
}