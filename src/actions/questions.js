import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

// export const SET_QUESTIONS = 'SET_QUESTIONS';
// export const setQuestions = userQuestions => ({
//     type: SET_QUESTIONS,
//     userQuestions
// });

// //GET USER QUESTIONS
// export const getQuestions = (event) => (dispatch, getState) => {
//     const authToken = getState().auth.authToken;
//     return fetch(`${API_BASE_URL}/questions`, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${authToken}`,
//             'content-type': 'application/json'
//         },
//     })
//         .then(res => normalizeResponseErrors(res))
//         .then(res => res.json())
//         .then(qauestions => dispatch(setQuestions(qauestions)))
//         .catch(err => {
//             const {reason, message, location} = err;
//             if (reason === 'ValidationError') {
//                 return Promise.reject(
//                     new SubmissionError({
//                         [location]: message
//                     })
//                 );
//             }
//         });
// };


export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const fetchQuestionsSuccess = data => ({
  type: FETCH_QUESTIONS_SUCCESS,
  data
});

export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';
export const fetchQuestionsError = error => ({
  type: FETCH_QUESTIONS_ERROR,
  error
});

//GET USER QUESTIONS
export const fetchQuestions = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/questions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchQuestionsSuccess(data));
    })
    .catch(err => {
      dispatch(fetchQuestionsError(err));
    });
};