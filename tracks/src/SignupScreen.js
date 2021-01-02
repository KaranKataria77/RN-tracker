import React, { useContext, useEffect} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';
import { Context as Authcontext } from './context/AuthContext';



function SignupScreen({navigation}) {

    const { state, signup, clearErrorMessage, tryLocalSignIn } = useContext(Authcontext)

    useEffect(() => {
        tryLocalSignIn()
    }, [])

    return (
        <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm 
          title="Sign Up form for tracker" 
          onSubmit={signup} 
          submitButtonText="Sign Up" 
          errorMessage={state.errorMessage} 
        />
        <NavLink text="Already have an account? Sign In instead." routeName="Signin" />
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
        headerShown: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 170
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15
    }
})

export default SignupScreen
