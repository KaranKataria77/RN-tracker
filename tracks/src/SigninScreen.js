import React, {useState, useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';
import {Context as AuthContext} from './context/AuthContext';


function SigninScreen() {

    const {state, signin, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
              title="Sign In form for tracker" 
              onSubmit={signin} 
              submitButtonText="Sign In" 
              errorMessage={state.errorMessage} 
            />
            <NavLink text="Not had a account? Create account now!" routeName="Signup" />
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 170
    }
})

export default SigninScreen
