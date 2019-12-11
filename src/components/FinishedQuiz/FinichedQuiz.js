import React from 'react'
import classes from './FinishedQuiz.css'


const FinishedQuiz = props => {
    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    What was the queestion?
                    <i className={'fa fa-times ' + classes.error} />
                </li>
                <li>
                    <strong>1.</strong>
                    What was the queestion?
                    <i className={'fa fa-check ' + classes.success} />
                </li>
            </ul>
            <p>4 of 10</p>

            <div>
                <button>Retry</button>
            </div>
        </div>
    )
}

export default FinishedQuiz