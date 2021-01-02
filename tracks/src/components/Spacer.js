import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
View

function Spacer({children}) {
    return (
        <View style={styles.spacer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    spacer:{
        margin: 15
    }
})

export default Spacer
