import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Icon } from 'react-native-elements'
import { UsersProvider } from './context/UsersContext'
import UserForm from './views/UserForm'
import UserList from './views/UserList'

export default props => {

    const Stack = createNativeStackNavigator()

    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="UserList"
                    screenOptions={screenOptions}>
                    <Stack.Screen
                        name="UserList"
                        component={UserList}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuarios",
                                headerRight: () => (
                                    <Button
                                        type="clear"
                                        icon={
                                            <Icon name="add"
                                                size={25}
                                                color="white" />
                                        }
                                        onPress={() => navigation.navigate("UserForm")}

                                    />)
                            }
                        }} />
                    <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Formulario de Usuarios" }} />

                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )

}
const screenOptions = {
    headerStyle: {
        backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}