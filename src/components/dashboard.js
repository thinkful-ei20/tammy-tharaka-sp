import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchQuestions, fetchNext} from '../actions/questions';
import AnswerForm from './answer-form';
import './dashboard.css';
import './content.css';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }


    render() {
        // console.log(this.props)

        return (
            <div className="main-content-container">
                <div className="main-content-container2">
                    <div className="content-container dashboard">
                        <ul className="question-card">
                        <li className="question-card">
                            <div className="dashboard-questions">
                                Who is this?
                            
                                <div className="imgDiv">
                                <img src={this.props.questions.data} alt="image of a not usually historical figure who shaped American discourse on civil rights"/>
                                </div>
                            </div>
                        </li>

                        <li className="question-card">
                            <div className="answer-container">
                                {this.props.questions.answer ? '' : <AnswerForm />}
                                <span className="anserMessage">{this.props.questions.answer}</span><br></br>
                                <button className="next-button" id="next-card" onClick={() => this.props.dispatch(fetchNext())}>Next</button>
                            </div>
                        </li>
                        </ul>  
                    </div>
                </div>
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
        answer: state.questions.answer
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));


//customization

// <div className="dashboard-username">
// Hey {this.props.username}!
// </div>