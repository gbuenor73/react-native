import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field}
                key={c}
                onOpen={() => props.onOpenField(r, c)}
                onSelect={e => { props.onSelect(r, c) }} />
        })
        return <View key={r} style={r} style={{ flexDirection: 'row' }}>{columns}</View>
    })
    return <SafeAreaView style={styles.container}>{rows}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE'
    }
})