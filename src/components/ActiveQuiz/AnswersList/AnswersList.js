import React from 'react'
import classes from './AnswersList.css'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (
    <ul className={classes.AnswerList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem 
                    answer={answer}
                />
            )
        }) }
    </ul>
)

export default AnswersList