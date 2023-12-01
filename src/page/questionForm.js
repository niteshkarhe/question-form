import React from 'react';
import { useState } from "react";

import DisplayQuestion from './component/DisplayQuestion';
import useStyles from './questionForm.style';


const QuestionForm = (props) => {
    const [questions, setQuestions] = useState(props.questions.length > 0 ?  props.questions : [])
    const { v4 : uuidv4 } = require("uuid");
    const [questionNumber, setQuestionNumber] = useState(0);
    const { classes } = useStyles();
    const numberOfQuestion = questions.length;

    return (
        <React.Fragment>
            <div>Please click on Reveal Question button, give access to camera and microphone. After clicking the button, recording will start automatically. Once you record the answer click "Stop Recording" button.</div>
            <div className={classes.questionForm}>
            {
                questions.map((eachQuestion, index) => {
                    return (<DisplayQuestion key={uuidv4()} question={eachQuestion} item={index} setQuestionNum={setQuestionNumber} questionNum={questionNumber} numOfQuestion={numberOfQuestion}/>)
                })
            }
            </div>
        </React.Fragment>
    )
}

export default QuestionForm;