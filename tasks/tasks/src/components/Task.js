import moment from 'moment'
import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyle from '../commonStyle'

export default props => {

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : null

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formatedDate = moment(date).locale('pt-br').format('dddd,  D [de] MMMM')

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.checkContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text style={[styles.desc, doneOrNotStyle]}>{props.desc}</Text>
                <Text style={styles.date}>{formatedDate}</Text>
                {/* <Text>{props.doneAt + ""}</Text> */}
            </View>
        </SafeAreaView>
    )
}

function getCheckView(doneAt) {
    if (doneAt != null)
        return (
            <View style={styles.done} >
                <Icon name='check' size={20} color='#FFF'></Icon>
            </View>
        )
    else
        return (
            <View style={styles.pending} />
        )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10

    },
    checkContainer: {
        width: "20%",
        alignItems: 'center'
    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',

    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.mainText,
        fontSize: 15

    },
    date: {
        fontFamily: commonStyle.fontFamily,
        color: commonStyle.colors.mainText,
        fontSize: 12
    }
})