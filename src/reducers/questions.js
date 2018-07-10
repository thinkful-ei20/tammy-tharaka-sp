import { SET_USER_QUESTIONS } from '../actions/questions';


const initialState = {
    userQuestions: []
};

export default function reducer(state = initialState, action) {
    if (action.type === SET_USER_QUESTIONS) {
        return Object.assign({}, state, {
            userQuestions: action.userQuestions
        });
    }
    return state;
}
