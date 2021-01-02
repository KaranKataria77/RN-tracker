import React, {useEffect, useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from './context/AuthContext';


function ResolveAuthScreen() {

    const { tryLocalSignIn } = useContext(Context)

    useEffect(() => {
        tryLocalSignIn()
    }, [])

    return null;
}

export default ResolveAuthScreen
