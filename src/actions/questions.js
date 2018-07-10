import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const SET_USER_QUESTIONS = 'SET_USER_QUESTIONS';
export const setUserQuestions = userQuestions => ({
    type: SET_USER_QUESTIONS,
    userQuestions
});

//GET USER QUESTIONS
export const getUserQuestions = (event) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/questions`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(qauestions => dispatch(setUserQuestions(qauestions)))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};