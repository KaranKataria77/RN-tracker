import * as Location from 'expo-location';

const tenMeterWithDegree = 0.0001;

const getLocation = increment => {
    return {
        timestamp: 10000000,
        coords: {
            speed:0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 73.0470037 + increment * tenMeterWithDegree,
            latitude: 19.1836362 + increment * tenMeterWithDegree
        }
    }
}

let counter = 0;
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)