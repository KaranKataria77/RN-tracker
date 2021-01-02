import './_mockLocation';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';
import React, {useContext, useCallback} from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from './components/Map';
import {Context as LocationContext} from './context/LocationContext'
import useLocation from './hooks/useLocation';
import TrackForm from './components/TrackForm';


function TrackCreateScreen({isFocused}) {

    
    const {state, addLocation} = useContext(LocationContext);
    const callback = useCallback((location) => {
        addLocation(location, state.recording)
    }, [state.recording])
    const [err] = useLocation(isFocused,callback)
    
    return ( 
        <SafeAreaView forceInset={{top: 'always'}}>
            <Map />
            {err ? <Text>Please allow the location</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen);
