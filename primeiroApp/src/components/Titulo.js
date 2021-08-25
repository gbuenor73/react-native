import React, { Fragment } from 'react'
import { Text } from 'react-native'
import Estilo from './Estilo'

export default props => (
    // <SafeAreaView >
    <Fragment>
        <Text style={Estilo.txtG}>
            {props.principal}
        </Text>
        <Text>{props.secundario}</Text>
    </Fragment>
    // </SafeAreaView>
)