import React from 'react'
import { Button, SafeAreaView, StyleSheet } from 'react-native'

export default props => {
    return (
        <SafeAreaView style={style.Botoes}>
            <Button title='+' onPress={props.inc} />
            <Button title='-' onPress={props.dec} />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Botoes: {
        flexDirection: 'row'
    }
})