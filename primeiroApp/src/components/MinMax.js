import React from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default props => {

    console.warn(props)
    console.warn(props.min + props.max)
    return <Text style={Estilo.txtG}>O valor {props.max} é maior que o valor {props.min}</Text>
}


