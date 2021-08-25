import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Estilo from '../Estilo'

export default props => {
    return (
        <SafeAreaView style={style.Display}>
            <Text style={[Estilo.txtG, style.DisplayText]}>
                {props.num}
            </Text>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300
    },
    DisplayText: {
        color: '#FFF'
    }

})
