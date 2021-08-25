import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV2}>
            <Quadrado />
            <Quadrado color='#900' />
            <Quadrado color='#090' />
            <Quadrado color='#009' />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        backgroundColor: '#500',
        flex: 1,
        justifyContent: "space-around",
        width: '100%',
        alignItems: "flex-end"
    }
})