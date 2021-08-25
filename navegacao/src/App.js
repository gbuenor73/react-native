import React from 'react'
import { SafeAreaView, Text, TextComponent } from 'react-native'
import TextoCentral from './components/TextoCentral'

export default props => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TextoCentral corFundo='#333'> App </TextoCentral>
        </SafeAreaView>
    )

}