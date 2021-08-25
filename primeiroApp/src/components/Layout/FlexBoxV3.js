import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV3}>
            <Quadrado color='#900' lado={20} />
            <Quadrado color='#090' lado={30} />
            <Quadrado color='#009' lado={40} />
            <Quadrado />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        height: 350,
        width: '100%',
        backgroundColor: '#500',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "flex-start"
    }
})