import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import SigninScreen from './src/SigninScreen';
import SignupScreen from './src/SignupScreen';
import AccountScreen from './src/AccountScreen';
import TrackCreateScreen from './src/TrackCreateScreen';
import TrackDetailScreen from './src/TrackDetailScreen';
import TrackListScreen from './src/TrackListScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {Provider as TrackProvider} from './src/context/TrackContext';
import { setNavigator } from './src/navRef';
import ResolveAuthScreen from './src/ResolveAuthScreen';


const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <TrackProvider>
    <LocationProvider>
    <AuthProvider>
      <App ref={(navigator) => {setNavigator(navigator)}} />
    </AuthProvider>
    </LocationProvider>
    </TrackProvider>
  )
}