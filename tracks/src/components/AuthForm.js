import React, {useState, useContext} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';




function AuthForm({title, onSubmit, submitButtonText, errorMessage}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <>
        <Spacer>
            <Text h3>{title}</Text>
        </Spacer>
            <Input 
              label="Email" 
              value={email} 
              onChangeText={setEmail} 
              autoCorrect={false} 
            />
            <Input 
              secureTextEntry
              label="Password" 
              value={password} 
              onChangeText={setPassword} 
              autoCorrect={false} 
            />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        <Spacer>
            <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
        </Spacer>
        </>
    )
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
    },
    signin: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 15
    }
})

export default AuthForm;
