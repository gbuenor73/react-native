import React from 'react'
import { Button, SafeAreaView, Text, TextInput } from 'react-native'
import Estilo from '../Estilo'
import MegaNumero from './MegaNumero'

export default class Mega extends React.Component {

    state = {
        qntdNumeros: this.props.qntdNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qntd) => {
        this.setState({ qntdNumeros: +qntd })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    // gerarNumeros = () => {
    //     const numeros = Array(this.state.qntdNumeros)
    //         .fill()
    //         .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
    //         .sort((a, b) => a - b)

    //     this.setState({ numeros })
    // }

    gerarNumeros = () => {
        const { qntdNumeros } = this.state
        const numeros = []

        for (let index = 0; index < qntdNumeros; index++) {
            numeros.push(this.gerarNumeroNaoContido(numeros));
        }

        numeros.sort((a, b) => a - b)
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map(num => {
            return <MegaNumero key={num} num={num} />
        })
    }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador da Mega-Sena
                </Text>
                <Text style={Estilo.txtG}>
                    {this.state.qntdNumeros}
                </Text>
                <TextInput
                    keyboardType='numeric'
                    style={{ borderBottomWidth: 1 }}
                    placeholder='Quantidade de numeros'
                    value={`${this.state.qntdNumeros}`}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title='Gerar'
                    onPress={this.gerarNumeros}
                />
                <SafeAreaView style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {this.exibirNumeros()}
                </SafeAreaView>
            </>
        )
    }
}