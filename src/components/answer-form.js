import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {fetchQuestions} from '../actions/questions';
import {required, nonEmpty} from '../validators';

export class AnswerForm extends React.Component {
    onSubmit(values) {
        console.log('submit')
        this.props.dispatch(fetchQuestions());//for now just get fetch the same image
        this.props.reset();//Clearing input fields
    }

    render() {
    let successMessage;

        if (this.props.submitSucceeded) {
            successMessage = (
                <div className="message message-success elementToFadeInAndOut">
                    Message submitted successfully
                </div>
            );
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = (
                <div className="message message-error elementToFadeInAndOut">{this.props.error}</div>
            );
        }
        return (
            <div className="answerFormContainer">
                <h3>Enter your answer</h3>
                <form
                    className="answer-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {successMessage}
                    {errorMessage}
                   
                    <Field
                        component={Input}
                        type="text"
                        placeholder="Answer"
                        name="answer"
                        id="answer"
                        validate={[required, nonEmpty]}
                    />
          
                    <button className="answerPostButton" disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'post',
    onSubmitFail: (errors, dispatch) => dispatch(focus('post', 'title'))
})(AnswerForm);
