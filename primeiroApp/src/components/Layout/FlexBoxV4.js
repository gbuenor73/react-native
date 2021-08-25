import React from 'react'
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text } from 'react-native'
import Quadrado from './Quadrado'

export default props => {
    return (
        <SafeAreaView style={style.FlexV4}>
            <SafeAreaView style={style.V0} />
            <SafeAreaView style={style.V1} />
            <SafeAreaView style={style.V2} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        backgroundColor: '#500',
        width: 100,
        flexGrow: 1
    },
    V0: {
        backgroundColor: 'gray',
        height: 300
    },
    V1: {
        backgroundColor: '#ff801a',
        flexGrow: 3
    },
    V2: {
        backgroundColor: '#dd22c1',
        flexGrow: 1
    }

})