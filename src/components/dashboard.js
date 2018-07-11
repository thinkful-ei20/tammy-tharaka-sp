import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requires-login';
import {fetchProtectedData} from '../actions/protected-data';
import {fetchQuestions} from '../actions/questions';
import AnswerForm from './answer-form';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchQuestions());
    }

    render() {
        console.log(this.props.questions.data.img)

        return (
            <div className="dashboard">
                <div className="dashboard-username">
                   Welcome {this.props.username}
                </div>
                <div className="dashboard-questions">
                    Who is this historical figure?<br></br>
                    <img src={this.props.questions.data.img}/>
                </div>
                {/* <AnswerForm /> */}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        username: state.auth.currentUser.username,
        name: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        questions: state.questions
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
