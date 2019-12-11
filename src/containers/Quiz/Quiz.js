import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {

    state = {
        quiz: [
            {
                answers: [
                    {text: 'Answer1'},
                    {text: 'Answer2'},
                    {text: 'Answer3'},
                    {text: 'Answer4'}
                ]
            }
        ]
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz works</h1>
                    <ActiveQuiz
                    answers={this.state.quiz[0].answers}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz