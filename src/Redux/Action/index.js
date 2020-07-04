import Data from '../../Component/common/index';
import { GET_ALL_DATA, GET_DATA_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, ON_LOGIN } from '../Types';

export const requestLogin = (email, password) => {
    return dispatch => {
        dispatch({
            type: ON_LOGIN,
        });
        if (email === 'hruday@gmail.com' && password === 'hruday123') {
            return loginSuccess(dispatch, true)
        } else {
            return loginFail(dispatch, false)
        }
    };
};

const loginSuccess = (dispatch, res) => {
    dispatch({
        type: LOGIN_SUCCESS,
    });
};
const loginFail = (dispatch, error) => {
    dispatch({
        type: LOGIN_FAIL,
    });
};

export const requestData = () => {
    return dispatch => {
        dispatch({
            type: GET_ALL_DATA,
        });
        return getDataSuccess(dispatch, Data)
    };
};

const getDataSuccess = (dispatch, res) => {
    dispatch({
        type: GET_DATA_SUCCESS,
        payload: res
    });
};
