import createDataContext from "./createDataContext";
import trackerapi from '../api/trackerapi';
import { AsyncStorage } from "react-native";
import { navigate } from '../navRef';



const authReducer = (state, action) => {
    switch(action.type){
        case "add_error":
            return {...state, errorMessage: action.payload}
        case "signup":
            return {errorMessage: "", token: action.payload}
        case "clear_error_message":
            return {...state, errorMessage: ""}
        case "signout":
            return {token: null, errorMessage: ""}
        default:
            return state;
    }
};

const tryLocalSignIn = (dispatch) => {
    return async () => {
        const token = await AsyncStorage.getItem("token")
    if(token){
        dispatch({type: "signup", payload: token})
        navigate("TrackList")
    }else{
        navigate("loginFlow")
    }
    }
}
    

const clearErrorMessage = (dispatch) => () => {
    dispatch({type: "clear_error_message"})
}

const signup = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerapi.post('/signup', {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "signup", payload: response.data.token})
            navigate("TrackList")
        }catch(err){
            dispatch({type: "add_error", payload: "something went wrong"})
        }
    }
}

const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerapi.post('/signin', {email, password})
            await AsyncStorage.setItem("token", response.data.token)
            dispatch({type: "signup", payload: response.data.token})
            navigate("TrackList")
        }catch(err){
            dispatch({type: "add_error", payload: "something went wrong"})
        }
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem("token")
    dispatch({type: "signout"})
    navigate("loginFlow")
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn},
    { token: null, errorMessage: ""}
)