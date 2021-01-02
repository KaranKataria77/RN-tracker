import { Accuracy, requestPermissionsAsync, watchPositionAsync } from 'expo-location';
import React, {useState, useEffect} from 'react';

export default (isFocus, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try{
                const {granted} = await requestPermissionsAsync();
                if(!granted){
                    throw new Error("location denied")
                }
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                  }, callback
                )
            }catch(e){
                setErr(e)
            }
        }
        if(isFocus){
        startWatching()
        }else{
            if(subscriber){
            subscriber.remove();
            }
            subscriber = null
        }
        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
    }, [isFocus, callback])

    return [err]
}