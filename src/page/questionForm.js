import React from 'react';
import { useState } from "react";

import DisplayQuestion from './component/DisplayQuestion';


const QuestionForm = (props) => {
    const [questions, setQuestions] = useState(props.questions.length > 0 ?  props.questions : [])
    const { v4 : uuidv4 } = require("uuid");
    const [questionNumber, setQuestionNumber] = useState(0);

    return (
        <React.Fragment>
            <div>Question Form</div>
            {
                questions.map((eachQuestion, index) => {
                    return (<DisplayQuestion key={uuidv4()} question={eachQuestion} item={index} setQuestionNum={setQuestionNumber} questionNum={questionNumber}/>)
                })
            }
        </React.Fragment>
    )
}

export default QuestionForm;