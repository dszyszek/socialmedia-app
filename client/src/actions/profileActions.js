import axios from 'axios';

import {GET_PROFILE, PROFILE_LOADING, GET_ERRORS, CLEAR_CURRENT_PROFILE, CLEAR_ERRORS} from './types';
import {logoutUser} from './authActions';

export const getCurrentProfile = () => dispatch => {
    loadProfile();

    axios.get('http://localhost:3000/api/profile/me')
    .then(res => {
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    })
    .catch(e => {
        dispatch({
            type: GET_PROFILE,
            payload: {}
        });
    });
};

export const loadProfile = () => dispatch => {
    dispatch({
        type: PROFILE_LOADING
    });
};

export const logoutProfile = () => dispatch => {
    dispatch({
        type: CLEAR_CURRENT_PROFILE
    });
};

export const createProfile = (data, history) => dispatch => {
    axios.post('http://localhost:3000/api/profile/me', data)
        .then(res => history.push('/Dashboard'))
        .catch(e => {
            return dispatch({
                type: GET_ERRORS,
                payload: e.response.data
            });
        })
};

export const deleteProfile = (history) => dispatch => {
    axios.delete('http://localhost:3000/api/profile/')
    .then(res => {
        dispatch(logoutProfile());
        dispatch(logoutUser());

        history.push('/SignUp');
    })
    .catch(e => console.log(e));
};

export const clearErrors = () => dispatch => {
    console.log('done clearErrors');
    dispatch({
        type: CLEAR_ERRORS
    });
};