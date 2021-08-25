import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#888'

    },
    operationButton: {
        backgroundColor: '#fa8231',
        color: '#fff'
    },
    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    tripleButton: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

export default props => {
    const styleButton = [styles.button]
    if (props.double) styleButton.push(styles.doubleButton)
    if (props.triple) styleButton.push(styles.tripleButton)
    if (props.operation) styleButton.push(styles.operationButton)


    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}