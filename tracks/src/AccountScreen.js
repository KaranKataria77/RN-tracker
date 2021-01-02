import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Spacer from './components/Spacer';
import { Context as AuthContext } from './context/AuthContext';
import { SafeAreaView } from 'react-navigation';

function AccountScreen() {

    const { signout } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Account Screen</Text>
            <Spacer>
            <Button title="Sign Out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
}

export default AccountScreen
