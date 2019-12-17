import React, { Component } from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinichedQuiz'

class Quiz extends Component {

    state = {
        results: {}, // { [id]: 'success' 'error' }
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // { [id]: 'success' 'error' }
        quiz: [
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
                question: 'What is up, Michal?',
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
        const results = this.state.results
        
        if(question.rightAnswerId === answerId) {
            if(!results[question.id]) {
                results[question.id] = 'success'
            }

            this.setState({
                answerState:{[answerId]: 'success'},
                results
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
            results[question.id] = 'error'
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            })
        }
    }

    isQuizFinished() {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: null,
            isFinished: false,
            results: {}
        })
    }

    componentDidMount() {
        console.log('Quiz ID = ', this.props.match.params.id)
    }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                <h1>Quiz works</h1>

                {this.state.isFinished
                    ?   <FinishedQuiz 
                        results={this.state.results}
                        quiz={this.state.quiz}
                        onRetry={this.retryHandler}
                    />
                    :   <ActiveQuiz
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