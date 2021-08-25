import React from 'react'
import { FlatList, Text } from 'react-native'
import Estilo from '../Estilo'
import produtos from './produtos'

export default props => {

    // function obterLista() {
    //     return produtos.map(p => {
    //         return <Text key={p.id}>{p.id}) {p.nome} = Preço R${p.preco}</Text>
    //     })
    // }

    const produtoRender = ({ item: p }) => {
        return <Text >{p.id}) {p.nome} = Preço R${p.preco}</Text>
    }

    return (
        <>
            <Text style={Estilo.txtG}>
                Lista de produtos 2
            </Text>
            <FlatList
                data={produtos}
                //  keyExtractor={i => '${i.id}'} 
                renderItem={produtoRender} />
        </>
    )
}