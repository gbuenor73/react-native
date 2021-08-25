import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import FlexBoxV2 from './components/Layout/FlexBoxV2'
import FlexBoxV3 from './components/Layout/FlexBoxV3'
import FlexBoxV4 from './components/Layout/FlexBoxV4'
import Mega from './components/mega/Mega'

export default () =>
(
    <SafeAreaView style={style.App}>
        {/* <Primeiro /> */}
        {/* <MinMax min={3} max={20} /> */}
        {/* <Aletorio inicio={5} fim={11} /> */}
        {/* <Titulo principal="Cadastro" secundario="Tela de cadastro" /> */}
        {/* <Botao /> */}
        {/* <Contador inicial={3} passo={13} /> */}
        {/* <Pai /> */}
        {/* <ContadorV2 /> */}
        {/* <DiferenciarOSs /> */}
        {/* <ParImpar num={2} /> */}
        {/* <Familia>
            <Membro nome='Gabriel' sobrenome='Bueno' />
            <Membro nome='Otavio' sobrenome='Bueno' />
        </Familia>
        <Familia><Text></Text>
            <Membro nome='Joao' sobrenome='Rodrigues' />
            <Membro nome='Otavio' sobrenome='Rodrigues' />
        </Familia> */}
        {/* <UsuarioLogado usuario={{ nome: 'Gabriel', email: 'gabriel@email.com' }} />
        <UsuarioLogado usuario={{ nome: 'Gabriel' }} />
        <UsuarioLogado usuario={{ email: 'gabriel@email.com' }} />
        <UsuarioLogado usuario={{}} />
        <UsuarioLogado usuario={null} />
        <UsuarioLogado usuario={{ nome: 'Gabriel', email: 'gabriel@email.com' }} /> */}
        {/* <ListaProdutosV2 /> */}
        {/* <DigiteSeuNome /> */}
        {/* <FlexBoxV4 /> */}
        <Mega qntdNumeros={7} />
    </SafeAreaView >
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20

    }
})
