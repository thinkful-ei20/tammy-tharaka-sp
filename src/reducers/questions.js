import {
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR,
    FETCH_NEXT_SUCCESS,
    FETCH_NEXT_ERROR
  } from '../actions/questions';
  

  const initialState = {
    data: [],
    next: [],
    error: null
  };
  
  export default function reducer(state = initialState, action) {
    if (action.type === FETCH_QUESTIONS_SUCCESS) {
      return Object.assign({}, state, {
        data: action.data,
        error: null
      });
    } else if (action.type === FETCH_QUESTIONS_ERROR) {
      return Object.assign({}, state, {
        error: action.error
      });
    } else if (action.type === FETCH_NEXT_SUCCESS) {
      return Object.assign({}, state, {
        next: action.next,
        error: null
      });
    } else if (action.type === FETCH_NEXT_ERROR) {
      return Object.assign({}, state, {
        error: action.error
      });
    }
    return state;
  }
  
