import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import Drawer from './Drawer'
import Tab from './Tab'
import Stack from './Stack'

export default props => (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
            {/* <Stack /> */}
            <Tab />
            {/* <Drawer /> */}
        </NavigationContainer>
    </SafeAreaView>
)