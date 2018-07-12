import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchQuestions, fetchNext} from '../actions/questions';
import AnswerForm from './answer-form';
import './dashboard.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }


    render() {
        // console.log(this.props)

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                   Welcome {this.props.username}
                </div>
                <div className="dashboard-questions">
                    Who is this historical figure?<br></br>
                    <div className="imgDiv">
                        <img src={this.props.questions.data}/>
                    </div>
                    
                </div>
                <AnswerForm />
                <span>{this.props.questions.answer}</span><br></br>
                <button onClick={() => this.props.dispatch(fetchNext())}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.answer)
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        questions: state.questions,
        // answer: state.questions.answer
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
