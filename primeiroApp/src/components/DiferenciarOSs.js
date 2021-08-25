import React from 'react'
import { Platform, Text } from 'react-native'
import Estilo from './Estilo'

export default _ => {
    if (Platform.OS === 'android')
        return <Text style={Estilo.txtG}>Android</Text>
    else if (Platform.OS === 'ios')
        return <Text style={Estilo.txtG}>IOS</Text>
    else
        return <Text style={Estilo.txtG}>Eita!!!</Text>

}