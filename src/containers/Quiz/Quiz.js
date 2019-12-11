import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinichedQuiz'

class Quiz extends Component {

    state = {
        isFinished: true,
        activeQuestion: 0,
        answerState: null, 
        quiz: [
            {
                id: 1,
                question: 'What is up?',
                rightAnswerId: 2,
                answers: [
                    {id: 1, text: 'Answer1'},
                    {id: 2, text: 'Answer2'},
                    {id: 3, text: 'Answer3'},
                    {id: 4, text: 'Answer4'}
                ]
            },
             {
                id: 2,
                question: 'What is up, dude?',
                rightAnswerId: 3,
                answers: [
                    {id: 1, text: 'Answer1'},
                    {id: 2, text: 'Answer2'},
                    {id: 3, text: 'Answer3'},
                    {id: 4, text: 'Answer4'}
                ]
            },
             {
                id: 3,
                question: 'What is up, gal?',
                rightAnswerId: 2,
                answers: [
                    {id: 1, text: 'Answer1'},
                    {id: 2, text: 'Answer2'},
                    {id: 3, text: 'Answer3'},
                    {id: 4, text: 'Answer4'}
                ]
            }
        ]
    }

    onAnswerClickHandler = (answerId) => {
        if(this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]

        
        if(question.rightAnswerId === answerId) {
            this.setState({
                answerState:{[answerId]: 'success'}
            })
            
            const timeout = window.setTimeout(() => {
                
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)
            
        } else {
            this.setState({
                answerState: {[answerId]: 'error'}
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz works</h1>

                {this.state.isFinished
                    ? <FinishedQuiz />
                    : <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                     /> 
                }
                </div>
            </div>
        )
    }
}

export default Quiz