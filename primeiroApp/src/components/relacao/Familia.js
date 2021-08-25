import React from 'react'
import { Text } from 'react-native'
import Membro from './Membro'

export default props => {
    return (
        <>
            <Text>[Inicio] Membros da familia </Text>
            {props.children}
            <Text>[Fim] Membros da familia </Text>
            <Text></Text>
        </>
    )
}