import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import Estilo from './Estilo'

export default ({ num = 0 }) => {

    // if (num % 2 === 0) {
    //     return (<Text style={Estilo.txtG}>Par</Text>)
    // }
    // else
    //     return (<Text style={Estilo.txtG}>Impar</Text>)


    let text = num % 2 === 0 ? 'Par' : 'Impar'

    return (
        <SafeAreaView>
            <Text style={Estilo.txtG}>{text}</Text>
        </SafeAreaView>
    )
}