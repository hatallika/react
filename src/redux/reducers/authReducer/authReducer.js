import * as types from './actionTypes';
import {
    loginError,
    loginStart,
    loginSuccess, logoutError,
    logoutStart, logoutSuccess,
    registerError,
    registerStart,
    registerSuccess
} from "./actions";
import {auth} from "../../../service/firebase";

const initialState = {
    authLoading: false,
    authError: null,
    currentUser: null
}

export const authReducer = (state=initialState, action) => {
    switch (action.type){
        case types.LOGIN_START:
        case types.LOGOUT_START:
        case types.REGISTER_START:
            return {
                ...state, authLoading: true
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state, authError: action.payload
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state, currentUser: action.payload
            }
        case types.LOGOUT_SUCCESS:
            return {
                ...state, currentUser: null //state.currentUser = null
            }

        default: return state
    }
}

export const registerInitiate = (email, password, displayName) => {
    return (dispatch) => {
        dispatch(registerStart());
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(({user}) => {
                user.updateProfile({displayName: displayName})
                    .then(()=>{
                    // Profile updated successfully!
                        dispatch(registerSuccess(user));
                }, (err) => console.log(err))
            })
            .catch(err => dispatch(registerError(err)));
    }
}

export const loginInitiate = (email, password) => {
    return (dispatch) => {
        dispatch(loginStart());
        auth
            .signInWithEmailAndPassword(email,password)
            .then(({user}) => {
                    // Profile updated successfully!
                    dispatch(loginSuccess(user));
                    })
            .catch(err => dispatch(loginError(err)));
    }
}

export const logoutInitiate = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((err) => dispatch(logoutError(err)))
    }
}