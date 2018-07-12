import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';


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

export const FETCH_NEXT_SUCCESS = 'FETCH_NEXT_SUCCESS';
export const fetchNextSuccess = data => ({
  type: FETCH_NEXT_SUCCESS,
  data
});

export const FETCH_NEXT_ERROR = 'FETCH_NEXT_ERROR';
export const fetchNextError = error => ({
  type: FETCH_NEXT_ERROR,
  error
});

export const ANSWER_QUESTION_SUCCESS = 'ANSWER_QUESTION_SUCCESS';
export const answerSuccess = answer => ({
  type: ANSWER_QUESTION_SUCCESS,
  answer
});

export const ANSWER_QUESTION_ERROR = 'ANSWER_QUESTION_ERROR';
export const answerError = error => ({
  type: ANSWER_QUESTION_ERROR,
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

//GET NEXT QUESTION
export const fetchNext = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/questions/next`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(fetchNextSuccess(data));
    })
    .catch(err => {
      dispatch(fetchNextError(err));
    });
};

//PUT USER ANSWERS
export const answerQuestion = (correctAnswer) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;

  return fetch(`${API_BASE_URL}/questions`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${authToken}`,
      'content-type': 'application/json'
    },
    
    body: JSON.stringify({
      correctAnswer
    })

  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => {
      dispatch(answerSuccess(data));
      console.log('MY ANSWER',data);
    })
    .catch(err => {
      dispatch(answerError(err));
    });
};