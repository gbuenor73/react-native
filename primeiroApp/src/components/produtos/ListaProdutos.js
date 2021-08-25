import React from 'react'
import { Text } from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {

    function obterLista() {
        return produtos.map(p => {
            return <Text key={p.id}>{p.id}) {p.nome} = Preço R${p.preco}</Text>
        })
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de produtos
            </Text>
            {obterLista()}
        </>
    )
}