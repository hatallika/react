
import * as types from "./actionTypes";
//REGISTER
export const registerStart = () => ({
    type: types.REGISTER_START
});
export const registerError = (err) => ({
    type: types.REGISTER_ERROR,
    payload: err.toString()
});
export const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
});

//LOGIN
export const loginStart = () => ({
    type: types.LOGIN_START
});
export const loginError = (err) => ({
    type: types.LOGIN_ERROR,
    payload: err.toString()
});
export const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
});

//LOGOUT
export const logoutStart = () => ({
    type: types.LOGOUT_START
});
export const logoutError = (err) => ({
    type: types.LOGOUT_ERROR,
    payload: err.toString()
});
export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS
})