import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput } from 'react-native'
import Estilo from './Estilo'

export default props => {
    const [nome, setNome] = useState('Teste')

    return (
        <SafeAreaView>
            <TextInput
                style={Estilo.txtG}
                placeholder='Digite Seu Nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />

            <Text style={Estilo.txtG}>{nome}</Text>

        </SafeAreaView>
    )
}