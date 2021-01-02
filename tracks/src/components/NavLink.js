import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({navigation, routeName, text}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.signin}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    signin: {
        fontSize: 16,
        color: 'blue',
        marginLeft: 15
    }
})

export default withNavigation(NavLink);